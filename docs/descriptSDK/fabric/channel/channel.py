import logging
import random
import sys
import re
from _sha256 import sha256

from hfc.fabric.block_decoder import BlockDecoder
from hfc.fabric.transaction.tx_proposal_request import \
    create_tx_prop_req, CC_INSTALL, CC_TYPE_GOLANG, \
    CC_INSTANTIATE, CC_UPGRADE, CC_INVOKE, CC_QUERY
from hfc.protos.common import common_pb2, policies_pb2, collection_pb2
from hfc.protos.orderer import ab_pb2
from hfc.protos.peer import chaincode_pb2, proposal_pb2
from hfc.protos.msp import msp_principal_pb2
from hfc.protos.discovery import protocol_pb2
from hfc.protos.utils import create_cc_spec, create_seek_info, \
    create_seek_payload, create_envelope
from hfc.util import utils
from hfc.util.utils import proto_str, current_timestamp, proto_b, \
    build_header, build_channel_header, build_cc_proposal, \
    send_transaction_proposal, pem_to_der, package_chaincode
from .channel_eventhub import ChannelEventHub

SYSTEM_CHANNEL_NAME = "testchainid"
_logger = logging.getLogger(__name__)
_logger.setLevel(logging.DEBUG)

class Channel(object):
    """
    클라이언트만 호출 가능한 (채널 생성/업데이트를 위한) 객체
    client._create_or_update_channel()
    """

    def __init__(self, name, client):
        """
        client 객체, 고유한 채널명(^[a-z][a-z0-9.-]*$)을 받아 초기화
        """
        self._name = name
        self._client = client
        self._orderers = {}
        self._peers = {}
        self._anchor_peers = []
        self._kafka_brokers = []
        self._initialized = False
        self._is_dev_mode = False
        self._channel_event_hubs = {}
        # self._msp_manager = MSPManger() # TODO: use something instead

    def add_orderer(self, orderer):
        """
        채널 객체에 orderer 종단점을 추가
        orderer 노드 하나를 선택하여 orderer 네트워크에 broadcast 요청
        """

    def add_peer(self, peer):
        """
        체인 객체에 peer 종단점을 추가
        """

    def remove_orderer(self, orderer):
        """
        채널 객체에서 orderer 종단점을 삭제
        """

    def remove_peer(self, peer):
        """
        채널 객체에서 peer 종단점을 삭제
        """

    @property
    def orderers(self):
        return self._orderers
        """채널의 orderer 목록 반환"""

    @property
    def peers(self):
        """체인 상의 peer 노드 목록 반환"""

    @property
    def is_dev_mode(self):
        return self._is_dev_mode

    @is_dev_mode.setter
    def is_dev_mode(self, mode):
        self._is_dev_mode = mode

    def _get_latest_block(self, tx_context, orderer):
        """orderer 객체의 마지막 (serialized)블록 반환"""

    def _get_random_orderer(self):
        """orderer 네트워크에서 랜덤으로 orderer 객체 1개 선택"""

    @property
    def name(self):
        """채널명 얻기"""

    def state_store(self):
        """이 채널 상 client객체의 key-value 저장소 객체 얻기"""
        return self._client.state_store

    def _validate_state(self):
        """채널 상태(초기화 여부) 체크"""

    @property
    def is_sys_chan(self):
        """채널이 시스템체널이면 채널객체 반환"""

    def _validate_peer(self, peer):
        """peer가 Null이나 시스템체인은 아닌지, 체인에 존재하는지 체크"""

    def _validate_peers(self, peers):
        """peer 집합의 모든 peer들을 유효성 체크"""

    def send_install_proposal(self, tx_context, peers=None):
        """체인코드 설치 제안을 peer 집합에게 전송하여 응답을 받음"""
        return responses, proposal, header

    def _build_channel_header(type, tx_id, channel_id,
                              timestamp, epoch=0, extension=None):
        """채널 헤더를 빌드하여 common_proto.Header 객체 반환"""

    def is_readonly(self):
        """read-only 채널(트랜잭션,상태저장소는 조회만 가능)인지 체크(T/F)"""

    def join_channel(self, request):
        """
        peer가 채널에 보내는 join 요청을 받아
        chaincode_input, chaincode_id, cc_spec, cc_invoke_spec, tx_context
        를 생성하여 채널 헤더-->트랜잭션 헤더-->join 트랜잭션 제안을 빌드
        비동기 처리를 위한 coroutine 반환
        """
        return send_transaction_proposal(proposal,tx_context,request['targets'])

    def send_instantiate_proposal(self, tx_context, peers):
        """객체화된 chaincode 제안을 peer들에게 전송"""

    def send_upgrade_proposal(self, tx_context, peers):
        """
        peer들에게 체인코드 업그레이드를 제안하는 트랜잭션 전송
        Note: The policy must the one from instantiate
        """

    def _build_principal(self, identity):
        """
        식별자의 역할명이 peer/member/admin 인지에 따라 MSP 정책에 역할 설정
        문자열인 MSP ID를 인코딩-->역할 객체에 추가-->직렬화-->정책 객체 반환
        """

    def _get_policy(self, policy):
        """
        정책 객체의 key가 signed-by 또는 nOf 유형인지에 따라 해당 객체 반환
        """

    def _check_policy(self, policy):
        if not policy:
            raise Exception('Missing Required Param "policy"')

        if 'identities' not in policy \
                or policy['identities'] == '' \
                or not len(policy['identities']):
            raise Exception('Invalid policy, missing'
                            ' the "identities" property')
        elif not isinstance(policy['identities'], list):
            raise Exception('Invalid policy, the "identities"'
                            ' property must be an array')

        if 'policy' not in policy \
                or policy['policy'] == '' \
                or not len(policy['policy']):
            raise Exception('Invalid policy, missing the'
                            ' "policy" property')

    def _build_policy(self, policy, msps=None, returnProto=False):
        proto_signature_policy_envelope = \
            policies_pb2.SignaturePolicyEnvelope()

        if policy:
            self._check_policy(policy)
            proto_signature_policy_envelope.version = 0
            proto_signature_policy_envelope.rule.CopyFrom(
                self._get_policy(policy['policy']))
            proto_signature_policy_envelope.identities.extend(
                [self._build_principal(x) for x in policy['identities']])
        else:
            # TODO need to support MSPManager
            # no policy was passed in, construct a 'Signed By any member
            # of an organization by mspid' policy
            # construct a list of msp principals to select from using the
            # 'n out of' operator

            # for not making it fail with current code
            return proto_b('')

            principals = []
            signedBys = []
            index = 0

            if msps is None:
                msps = []

            for msp in msps:
                onePrn = msp_principal_pb2.MSPPrincipal()
                onePrn.principal_classification = \
                    msp_principal_pb2.MSPPrincipal.ROLE

                memberRole = msp_principal_pb2.MSPRole()
                memberRole.role = msp_principal_pb2.MSPRole.MEMBER
                memberRole.msp_identifier = msp

                onePrn.principal = memberRole.SerializeToString()

                principals.append(onePrn)

                signedBy = policies_pb2.SignaturePolicy()
                index += 1
                signedBy.signed_by = index
                signedBys.append(signedBy)

            if len(principals) == 0:
                raise Exception('Verifying MSPs not found in the'
                                ' channel object, make sure'
                                ' "initialize()" is called first.')

            oneOfAny = policies_pb2.SignaturePolicy.NOutOf()
            oneOfAny.n = 1
            oneOfAny.rules.extend(signedBys)

            noutof = policies_pb2.SignaturePolicy()
            noutof.n_out_of.CopyFrom(oneOfAny)

            proto_signature_policy_envelope.version = 0
            proto_signature_policy_envelope.rule.CopyFrom(noutof)
            proto_signature_policy_envelope.identities.extend(principals)

        if returnProto:
            return proto_signature_policy_envelope

        return proto_signature_policy_envelope.SerializeToString()

    def _send_cc_proposal(self, tx_context, command, peers):

        args = []
        request = tx_context.tx_prop_req

        args.append(proto_b(request.fcn))
        for arg in request.args:
            args.append(proto_b(arg))

        # construct the deployment spec
        cc_id = chaincode_pb2.ChaincodeID()
        cc_id.name = request.cc_name
        cc_id.version = request.cc_version

        cc_input = chaincode_pb2.ChaincodeInput()
        cc_input.args.extend(args)
        cc_spec = create_cc_spec(cc_input, cc_id, CC_TYPE_GOLANG)

        cc_dep_spec = chaincode_pb2.ChaincodeDeploymentSpec()
        cc_dep_spec.chaincode_spec.CopyFrom(cc_spec)

        # Pass msps, TODO create an MSPManager as done in fabric-sdk-node
        policy = self._build_policy(request.cc_endorsement_policy)

        args = [
            proto_b(command),
            proto_b(self.name),
            cc_dep_spec.SerializeToString(),
            policy,
            proto_b('escc'),
            proto_b('vscc'),
        ]

        # collections_configs need V1_2 or later capability enabled,
        # otherwise private channel collections and data are not available
        collections_configs = []
        if request.collections_config:
            for config in request.collections_config:
                static_config = collection_pb2.StaticCollectionConfig()
                static_config.name = config['name']
                static_config.member_orgs_policy.signature_policy. \
                    CopyFrom(self._build_policy(config['policy'],
                             returnProto=True))
                static_config.maximum_peer_count = config['maxPeerCount']
                static_config. \
                    required_peer_count = config.get('requiredPeerCount', 0)
                static_config.block_to_live = config.get('blockToLive', 0)
                static_config.member_only_read = config.get('memberOnlyRead',
                                                            False)

                collections_config = collection_pb2.CollectionConfig()
                collections_config.static_collection_config.CopyFrom(
                    static_config
                )

                collections_configs.append(collections_config)

            cc_coll_cfg = collection_pb2.CollectionConfigPackage()
            cc_coll_cfg.config.extend(collections_configs)
            args.append(cc_coll_cfg.SerializeToString())

        # construct the invoke spec
        invoke_input = chaincode_pb2.ChaincodeInput()
        invoke_input.args.extend(args)

        invoke_cc_id = chaincode_pb2.ChaincodeID()
        invoke_cc_id.name = proto_str('lscc')

        cc_invoke_spec = chaincode_pb2.ChaincodeInvocationSpec()
        cc_invoke_spec.chaincode_spec.CopyFrom(create_cc_spec(invoke_input,
                                                              invoke_cc_id,
                                                              CC_TYPE_GOLANG)
                                               )

        extension = proposal_pb2.ChaincodeHeaderExtension()
        extension.chaincode_id.name = proto_str('lscc')
        channel_header = build_channel_header(
            common_pb2.ENDORSER_TRANSACTION,
            tx_context.tx_id,
            self.name,
            current_timestamp(),
            epoch=0,
            extension=extension.SerializeToString()
        )

        header = build_header(tx_context.identity,
                              channel_header,
                              tx_context.nonce)
        proposal = build_cc_proposal(
            cc_invoke_spec,
            header,
            request.transient_map)

        signed_proposal = utils.sign_proposal(tx_context, proposal)
        response = [peer.send_proposal(signed_proposal)
                    for peer in peers]
        return response, proposal, header

    def send_tx_proposal(self, tx_context, peers):
        """
        Invoke the chaincode

        Send a transaction proposal to one or more endorser without
        creating a channel.

        Args:
        peers: the pees to send this proposal
                 if it is None the channel peers list will be used.
        channel_id(required): channel id
        client(required): client context

        Return: True in success or False in failure.

        """
        if not peers:
            peers = self.peers.values()

        return Channel._send_tx_proposal(self.name, tx_context, peers)

    @staticmethod
    def _send_tx_proposal(channel_id, tx_context, peers):

        request = tx_context.tx_prop_req

        args = []
        if request.fcn:
            args.append(proto_b(request.fcn))
        else:
            args.append(proto_b(CC_INVOKE))

        for arg in request.args:
            if isinstance(arg, bytes):
                args.append(arg)
            else:
                args.append(proto_b(arg))

        cc_id = chaincode_pb2.ChaincodeID()
        cc_id.name = request.cc_name
        if request.prop_type not in (CC_QUERY, CC_INVOKE):
            cc_id.version = request.cc_version

        cc_input = chaincode_pb2.ChaincodeInput()
        cc_input.args.extend(args)

        cc_spec = chaincode_pb2.ChaincodeSpec()
        cc_spec.type = chaincode_pb2.ChaincodeSpec.Type.Value(CC_TYPE_GOLANG)
        cc_spec.chaincode_id.CopyFrom(cc_id)
        cc_spec.input.CopyFrom(cc_input)

        extension = proposal_pb2.ChaincodeHeaderExtension()
        extension.chaincode_id.name = request.cc_name
        cc_invoke_spec = chaincode_pb2.ChaincodeInvocationSpec()
        cc_invoke_spec.chaincode_spec.CopyFrom(cc_spec)

        channel_header = build_channel_header(
            common_pb2.ENDORSER_TRANSACTION,
            tx_context.tx_id,
            channel_id,
            current_timestamp(),
            tx_context.epoch,
            extension=extension.SerializeToString())

        header = build_header(tx_context.identity,
                              channel_header,
                              tx_context.nonce)

        # chaincode real proposal
        proposal = build_cc_proposal(cc_invoke_spec, header,
                                     request.transient_map)
        signed_proposal = utils.sign_proposal(tx_context, proposal)
        responses = [peer.send_proposal(signed_proposal)
                     for peer in peers]

        # chaincode proposal without transient map
        # https://jira.hyperledger.org/browse/FAB-12536?focusedCommentId=52438&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-52438 # noqa
        proposal = build_cc_proposal(cc_invoke_spec, header, None)

        return responses, proposal, header

    def query_instantiated_chaincodes(self, tx_context, peers,
                                      transient_map=None):
        """
        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            transient_map: transient map
        Returns: chain code response
        """
        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='getchaincodes',
            cc_name='lscc',
            cc_type=CC_TYPE_GOLANG,
            args=[],
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    def query_transaction(self, tx_context, peers, tx_id,
                          transient_map=None):
        """Queries the ledger for Transaction by transaction ID.

        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            tx_id: transaction ID (string)
            transient_map: transient map
        Returns: chain code response
        """
        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='GetTransactionByID',
            cc_name='qscc',
            args=[self.name, tx_id],
            cc_type=CC_TYPE_GOLANG,
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    def get_block_between(self, tx_context, orderer, start, end):
        """
        Args:
            tx_context: tx_context instance
            orderer: orderer instance
            start: id of block to start query for
            end: id of block to end query for

        Returns: block(s)
        """
        seek_info = create_seek_info(start, end)
        seek_info_header = build_channel_header(
            common_pb2.HeaderType.Value('DELIVER_SEEK_INFO'),
            tx_context.tx_id,
            self._name,
            current_timestamp(),
            tx_context.epoch)

        seek_header = build_header(
            tx_context.identity,
            seek_info_header,
            tx_context.nonce)

        seek_payload_bytes = create_seek_payload(seek_header, seek_info)
        sig = tx_context.sign(seek_payload_bytes)

        envelope = create_envelope(sig, seek_payload_bytes)
        response = orderer.delivery(envelope)

        if response[0].block is None or response[0].block == '':
            _logger.error("fail to get block start from %s to %s" %
                          (str(start), str(end)))
            return None

        _logger.info("get block successfully, start from %s to %s" %
                     (str(start), str(end)))

        return response[0].block

    def query_block(self, tx_context, peers, block_number,
                    transient_map=None):
        """Queries the ledger for Block by block number.

        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            block_number: block to query for
            transient_map: transient map

        Returns:
            :class: `BlockDecoder`
        """
        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='GetBlockByNumber',
            cc_name='qscc',
            args=[self.name, block_number],
            cc_type=CC_TYPE_GOLANG,
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    def query_block_by_hash(self, tx_context, peers, block_hash,
                            transient_map=None):
        """
        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            block_hash: block to query for
            transient_map: transient map

        Returns:
            :class: `ChaincodeQueryResponse`
        """
        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='GetBlockByHash',
            cc_name='qscc',
            args=[self.name, block_hash],
            cc_type=CC_TYPE_GOLANG,
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    def query_block_by_txid(self, tx_context, peers, tx_id,
                            transient_map=None):
        """
        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            tx_id: transaction id
            transient_map: transient map

        Returns:
            :class: `ChaincodeQueryResponse`
        """
        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='GetBlockByTxID',
            cc_name='qscc',
            args=[self.name, tx_id],
            cc_type=CC_TYPE_GOLANG,
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    def query_info(self, tx_context, peers, transient_map=None):
        """Query the information of channel

        Queries for various useful information on the state of the channel
        (height, known peers).

        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            transient_map: transient map
        Returns:
            :class:`ChaincodeQueryResponse` channelinfo with height,
            currently the only useful information.
        """
        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='GetChainInfo',
            cc_name='qscc',
            args=[self.name],
            cc_type=CC_TYPE_GOLANG,
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    def get_channel_config(self, tx_context, peers,
                           transient_map=None):
        """Query the current config block for this channel

        Args:
            tx_context: tx_context instance
            peers: peers in the channel
            transient_map: transient map
        Returns:
            :class:`ChaincodeQueryResponse` channelinfo with height,
            currently the only useful information.
        """

        request = create_tx_prop_req(
            prop_type=CC_QUERY,
            fcn='GetConfigBlock',
            cc_name='cscc',
            args=[self.name],
            cc_type=CC_TYPE_GOLANG,
            transient_map=transient_map)

        tx_context.tx_prop_req = request
        return self.send_tx_proposal(tx_context, peers)

    async def get_channel_config_with_orderer(self, tx_context, orderer):
        """Query the current config block for this channel

        Args:
            tx_context: tx_context instance
            peers: peers in the channel

        Returns:
            :class:`ChaincodeQueryResponse` channelinfo with height,
            currently the only useful information.
        """

        seek_info = create_seek_info()

        kwargs = {}
        if orderer._client_cert_path:
            with open(orderer._client_cert_path, 'rb') as f:
                b64der = pem_to_der(f.read())
                kwargs['tls_cert_hash'] = sha256(b64der).digest()

        seek_info_header = build_channel_header(
            common_pb2.HeaderType.Value('DELIVER_SEEK_INFO'),
            tx_context.tx_id,
            self.name,
            current_timestamp(),
            tx_context.epoch,
            **kwargs
        )

        seek_header = build_header(
            tx_context.identity,
            seek_info_header,
            tx_context.nonce)

        seek_payload_bytes = create_seek_payload(seek_header, seek_info)
        sig = tx_context.sign(seek_payload_bytes)
        envelope = create_envelope(sig, seek_payload_bytes)

        # this is a stream response
        block = None
        stream = orderer.delivery(envelope)
        async for v in stream:
            if v.block is None or v.block == '':
                msg = "fail to get block"
                _logger.error(msg)
                raise Exception(msg)
            block = v.block
            break

        block = BlockDecoder().decode(block.SerializeToString())

        last_config = block['metadata']['metadata'][common_pb2.LAST_CONFIG]

        # if nor first block
        if 'index' in last_config['value']:
            seek_info = create_seek_info(last_config['value']['index'],
                                         last_config['value']['index'])
            seek_payload_bytes = create_seek_payload(seek_header, seek_info)
            sig = tx_context.sign(seek_payload_bytes)
            envelope = create_envelope(sig, seek_payload_bytes)

            block = None
            stream = orderer.delivery(envelope)
            async for v in stream:
                if v.block is None or v.block == '':
                    msg = "fail to get block"
                    _logger.error(msg)
                    raise Exception(msg)
                block = v.block
                break

            block = BlockDecoder().decode(block.SerializeToString())

        envelope = block['data']['data'][0]
        payload = envelope['payload']
        channel_header = payload['header']['channel_header']

        if channel_header['type'] != common_pb2.CONFIG:
            raise Exception(f'Block must be of type "CONFIG"'
                            f' ({common_pb2.CONFIG}), but got'
                            f' "{channel_header["type"]}" instead')

        config_envelope = payload['data']
        return config_envelope

    def _discovery(self, requestor, target,
                   local=False, config=False, interests=None):
        """Send a request from a target peer to discover information about the
         network

        Args:
            requestor (instance): a user to make the request
            target (instance): target peer to send discovery request
            local (bool): include local endpoints in the query
            config (bool): include channel configuration in the query
            interests (list): interests about an endorsement for cc

        Returns:
            Response from Discovery Service
        """

        auth = protocol_pb2.AuthInfo()
        sig = utils.create_serialized_identity(requestor)
        auth.client_identity = sig
        # TODO: add tls certificate in client and there
        discovery_req = protocol_pb2.Request()
        discovery_req.authentication.CopyFrom(auth)
        queries = []

        if local:
            q = protocol_pb2.Query()
            queries.append(q)
            local_peers = protocol_pb2.LocalPeerQuery()
            q.local_peers.CopyFrom(local_peers)
            _logger.info("DISCOVERY: adding local peers query")
        else:
            # It gives us state info about the channel
            # in addition of LocalPeerQuery information
            q = protocol_pb2.Query()
            queries.append(q)
            q.channel = self._name
            peer_query = protocol_pb2.PeerMembershipQuery()
            q.peer_query.CopyFrom(peer_query)
            _logger.info("DISCOVERY: adding channel peers query")

        if config:
            q = protocol_pb2.Query()
            queries.append(q)
            q.channel = self._name

            config_query = protocol_pb2.ConfigQuery()
            q.config_query.CopyFrom(config_query)
            _logger.info("DISCOVERY: adding config query")

        if interests and len(interests) > 0:
            q = protocol_pb2.Query()
            queries.append(q)
            q.channel = self._name

            cc_interests = []
            for interest in interests:
                proto_interest = self._build_proto_cc_interest(interest)
                cc_interests.append(proto_interest)

            cc_query = protocol_pb2.ChaincodeQuery()
            cc_query.interests.extend(cc_interests)
            q.cc_query.CopyFrom(cc_query)
            _logger.info("DISCOVERY: adding chaincodes/collection query")

        discovery_req.queries.extend(queries)

        request_bytes = discovery_req.SerializeToString()
        sig = requestor.cryptoSuite.sign(requestor.enrollment.private_key,
                                         request_bytes)
        envelope = create_envelope(sig, request_bytes)

        return target.send_discovery(envelope)

    def _build_proto_cc_interest(self, interest):
        """Use a list of DiscoveryChaincodeCall to build an interest.
        """
        cc_calls = []
        try:
            for cc in interest['chaincodes']:
                cc_call = protocol_pb2.ChaincodeCall()

                if cc.get('name'):
                    if not isinstance(cc['name'], str):
                        raise ValueError("chaincode names must be a string")
                    cc_call.name = cc['name']

                if cc.get('collection_names'):
                    if not isinstance(cc['collection_names'], list):
                        raise ValueError(
                            "collection_names must be an array of strings")
                    if not all(isinstance(x, str)
                               for x in cc['collection_names']):
                        raise ValueError("collection name must be a string")
                    cc_call.collection_names.extend(cc['collection_names'])

                cc_calls.append(cc_call)

        except AttributeError as e:
            _logger.error("The key 'chaincodes' is missing, {}".format(e))
            raise

        except KeyError as e:
            _logger.error("The key is missing, {}".format(e))
            raise

        interest_proto = protocol_pb2.ChaincodeInterest()
        interest_proto.chaincodes.extend(cc_calls)

        return interest_proto

    def newChannelEventHub(self, peer, requestor):
        channel_event_hub = ChannelEventHub(peer, self._name, requestor)
        if requestor.org not in self._channel_event_hubs:
            self._channel_event_hubs[requestor.org] = [channel_event_hub]
        else:
            self._channel_event_hubs[requestor.org].append(channel_event_hub)
        return channel_event_hub

    def getChannelEventHubsForOrg(self, requestor, mspid=None):
        if mspid:
            che = self._channel_event_hubs.get(mspid, [])
        else:
            che = self._channel_event_hubs.get(requestor.msp_id, [])

        return [x for x in che if x.connected]


def create_system_channel(client, name=SYSTEM_CHANNEL_NAME):
    """ Create system channel instance

    Args:
        client: client instance

    Returns: system channel instance

    """
    return Channel(name, client, True)


def create_app_channel(client, name):
    """ Create application channel instance

    Args:
        client: client instance

    Returns: system channel instance

    """
    return Channel(name, client, False)
