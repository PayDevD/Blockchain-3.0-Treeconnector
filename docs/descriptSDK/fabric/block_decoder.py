import logging
import binascii
import datetime
from base64 import b64encode
from datetime import timezone
"""
공통 프로토콜
"""
from hfc.protos.common import common_pb2
from hfc.protos.common import configtx_pb2
from hfc.protos.common import policies_pb2
from hfc.protos.common import configuration_pb2 as common_configuration_pb2
"""
피어 노드를 위한 프로토콜
"""
from hfc.protos.peer import chaincode_event_pb2
from hfc.protos.peer import transaction_pb2
from hfc.protos.peer import proposal_pb2
from hfc.protos.peer import proposal_response_pb2
from hfc.protos.peer import configuration_pb2 as peer_configuration_pb2
from hfc.protos.peer import events_pb2
"""
MSP를 위한 프로토콜
"""
from hfc.protos.msp import msp_principal_pb2
from hfc.protos.msp import msp_config_pb2
from hfc.protos.msp import identities_pb2
"""
orderer를 위한 프로토콜
"""
from hfc.protos.orderer import configuration_pb2 as orderer_configuration_pb2
"""
분산원장을 위한 프로토콜
"""
from hfc.protos.ledger.rwset import rwset_pb2
from hfc.protos.ledger.rwset.kvrwset import kv_rwset_pb2
"""
가십 프로토콜
"""
from hfc.protos.gossip import message_pb2

tx_validation_code = {
    0: 'VALID',
    1: 'NIL_ENVELOPE',
    2: 'BAD_PAYLOAD',
    3: 'BAD_COMMON_HEADER',
    4: 'BAD_CREATOR_SIGNATURE',
    5: 'INVALID_ENDORSER_TRANSACTION',
    6: 'INVALID_CONFIG_TRANSACTION',
    7: 'UNSUPPORTED_TX_PAYLOAD',
    8: 'BAD_PROPOSAL_TXID',
    9: 'DUPLICATE_TXID',
    10: 'ENDORSEMENT_POLICY_FAILURE',
    11: 'MVCC_READ_CONFLICT',
    12: 'PHANTOM_READ_CONFLICT',
    13: 'UNKNOWN_TX_TYPE',
    14: 'TARGET_CHAIN_NOT_FOUND',
    15: 'MARSHAL_TX_ERROR',
    16: 'NIL_TXACTION',
    17: 'EXPIRED_CHAINCODE',
    18: 'CHAINCODE_VERSION_CONFLICT',
    19: 'BAD_HEADER_EXTENSION',
    20: 'BAD_CHANNEL_HEADER',
    21: 'BAD_RESPONSE_PAYLOAD',
    22: 'BAD_RWSET',
    23: 'ILLEGAL_WRITESET',
    24: 'INVALID_WRITESET',
    254: 'NOT_VALIDATED',
    255: 'INVALID_OTHER_REASON',
}

type_as_string = {
    0: 'MESSAGE',  # signed 이지만 opaque는 아닌 메시지
    1: 'CONFIG',  # 채널설정을 표현
    2: 'CONFIG_UPDATE',  # 채널 설정을 업데이트하는 트랜잭션
    3: 'ENDORSER_TRANSACTION',  # endorser 기반 트랜잭션 전송
    4: 'ORDERER_TRANSACTION',  # 관리를 위해 orderer 내부에서 사용
    5: 'DELIVER_SEEK_INFO',  # Deliver API to seek 명령
    6: 'CHAINCODE_PACKAGE'  # 설치를 위한 체인코드 artifacts 패키징
}
implicit_metapolicy_rule = ['ANY', 'ALL', 'MAJORITY']
policy_policy_type = ['UNKNOWN', 'SIGNATURE', 'MSP', 'IMPLICIT_META']

class BlockDecoder(object):

    @staticmethod
    def decode(block_bytes):
        """직렬화(byte)된 블록 객체 --> JSON화(딕셔너리형)"""
        return block

    @staticmethod
    def decode_transaction(processed_tx_bytes):
        """직렬화(byte)된 트랜잭션 객체 --> JSON화(딕셔너리형)"""
        return processed_tx

class FilteredBlockDecoder(object):

    @staticmethod
    def decode(block_bytes):
        """
        필터링된 byte 블록 객체 --> JSON화(딕셔너리형)
        필터링된 트랜잭션-->트랜잭션ID, 타입, 유효성검증 코드
        """
        return filtered_block

class HeaderType(object):

    @staticmethod
    def convert_to_string(type_value):
        "헤더 객체 타입-->문자열로"

    @staticmethod
    def decode_payload_based_on_type(proto_data, type_value):
        "타입에 따라 페이로드 decode"

def decode_block_header(proto_block_header):
    """Block 객체 내의 헤더를 비직렬화"""

def decode_block_data(proto_block_data, not_proto=False):
    """블록으로부터 데이터를 deserialize해 반환"""

def decode_block_metadata(proto_block_metadata):
    """블록으로부터 메타데이터를 deserialize해 반환"""

def decode_block_data_envelope(proto_envelope):
    """블록에서 envelope를 deserialize해 반환"""

def decode_header(proto_header):
    """envelope에서 페이로드 헤더를 deserialize해 반환"""

def decode_channel_header(header_bytes):
    """채널 헤더 Decode --> deserialized 페이로드 채널 헤더 반환"""

def timestamp_to_date(timestamp):
    """타임스탬프를 %Y-%m-%d %H:%M:%S 형식으로 반환"""

def decode_version(version_long):
    """version_long 객체의 정수값(int형) 반환"""

def decode_signature_header(signature_header_bytes):
    """서명 헤더를 deserialize하여 반환"""

def decode_identity(id_bytes):
    """byte형 ID를 문자열로 반환"""

def decode_metadata_signatures(metadata_bytes):
    """메타데이터 서명을 decode"""

def decode_metadata_value_signatures(proto_meta_signatures):
    """메타데이터 값들로부터 서명 목록을 decode하여 반환"""

def decode_last_config_sequence_number(metadata_bytes):
    """Decodes last configuration and index for sequence number"""

def decode_transaction_filter(metadata_bytes):
    """Decodes transaction filter from metadata bytes"""

def decode_endorser_transaction(trans_bytes):
    """Decodes endorser transaction data"""

def decode_config_envelope(config_envelope_bytes):
    """deserialized config envelope"""

def decode_config(proto_config):
    """Decodes configuration from config envelope"""

def decode_config_update_envelope(config_update_envelope_bytes):
    """deserialized config update envelope signatures"""

def decode_config_update(config_update_bytes):
    """Decodes update bytes in configuration"""

def decode_config_groups(config_group_map):
    """Decodes configuration groups(map형) inside ConfigGroup"""

def decode_config_group(proto_config_group):
    """Decodes configuration group(dictionary형) from config protos"""

def decode_config_values(config_value_map):
    """Decodes config key:values(map형)"""

def decode_config_value(proto_config_value, key):
    """Decodes key:ConfigValue(Dictionary형)"""

def decode_config_policies(config_policy_map):
    """Decodes list of configuration policies(map형)"""

def decode_config_policy(proto_config_policy):
    """Decodes config policy based on type of policy"""

def decode_implicit_meta_policy(implicit_meta_policy_bytes):
    """Decodes implicit meta policy in a policy

    Args:
        implicit_meta_policy_bytes (str): Bytes of implicit meta policy

    Returns: deserialized implicit_meta_policy value.
    """
    implicit_meta_policy = {}
    proto_implicit_meta_policy = policies_pb2.ImplicitMetaPolicy()
    proto_implicit_meta_policy.ParseFromString(implicit_meta_policy_bytes)
    implicit_meta_policy['sub_policy'] = \
        proto_implicit_meta_policy.sub_policy
    implicit_meta_policy['rule'] = \
        implicit_metapolicy_rule[proto_implicit_meta_policy.rule]
    return implicit_meta_policy


def decode_signature_policy_envelope(signature_policy_envelope_bytes):
    """Decodes signature policy envelope bytes

    Args:
        signature_policy_envelope_bytes (str): Serialized signature envelope

    Returns: deserialized signature policy envelope contents.
    """
    signature_policy_envelope = {}
    proto_signature_policy_envelope = policies_pb2.SignaturePolicyEnvelope()
    proto_signature_policy_envelope.ParseFromString(
        signature_policy_envelope_bytes)
    signature_policy_envelope['version'] = \
        decode_version(proto_signature_policy_envelope.version)
    signature_policy_envelope['rule'] = \
        decode_signature_policy(proto_signature_policy_envelope.rule)
    identities = []
    proto_identities = proto_signature_policy_envelope.identities
    if proto_identities:
        for identity in proto_identities:
            msp_principal = decode_MSP_principal(identity)
            identities.append(msp_principal)
    signature_policy_envelope['identities'] = identities
    return signature_policy_envelope


def decode_signature_policy(proto_signature_policy):
    """Decodes signature policy based on field

    Args:
        proto_signature_policy: Object of SignaturePolicy()

    Returns: deserialized signature policy after decoding based on field.
    """
    signature_policy = {}
    if proto_signature_policy.HasField('n_out_of'):
        signature_policy['n_out_of'] = {}
        signature_policy['n_out_of']['n'] = proto_signature_policy.n_out_of.n
        signature_policy['n_out_of']['rules'] = []
        for rule in proto_signature_policy.n_out_of.rules:
            proto_policy = rule
            policy = decode_signature_policy(proto_policy)
            signature_policy['n_out_of']['rules'].append(policy)
    elif proto_signature_policy.HasField('signed_by'):
        signature_policy['signed_by'] = proto_signature_policy.signed_by
    else:
        raise ValueError("Unknown signature policy type")
    return signature_policy


def decode_MSP_principal(proto_msp_principal):
    """Decodes MSP Principal

    Args:
        proto_msp_principal (str): Bytes for MSP Principals

    Returns: deserialized MSP Principal based on classification.
    """
    msp_principal = {}
    msp_principal['principal_classification'] = \
        proto_msp_principal.principal_classification
    if (msp_principal['principal_classification'] ==
            msp_principal_pb2.MSPPrincipal.ROLE):
        msp_principal['principal_classification'] = 'ROLE'
        proto_principal = msp_principal_pb2.MSPRole()
        proto_principal.ParseFromString(proto_msp_principal.principal)
        msp_principal['principal'] = {}
        msp_principal['principal']['msp_identifier'] = \
            proto_principal.msp_identifier
        if proto_principal.role == 0:
            msp_principal['principal']['role'] = 'MEMBER'
        elif proto_principal.role == 1:
            msp_principal['principal']['role'] = 'ADMIN'
        else:
            pass
    elif (msp_principal['principal_classification'] ==
          msp_principal_pb2.MSPPrincipal.ORGANIZATION_UNIT):
        msp_principal['principal_classification'] = 'ORGANIZATION_UNIT'
        proto_principal = msp_principal_pb2.OrganizationUnit()
        proto_principal.ParseFromString(proto_msp_principal.principal)
        msp_principal['principal'] = {}
        msp_principal['principal']['msp_identifier'] = \
            proto_principal.msp_identifier
        msp_principal['principal']['organizational_unit_identifier'] = \
            proto_principal.organizational_unit_identifier
        msp_principal['principal']['certifiers_identifier'] = \
            proto_principal.certifiers_identifier
    else:
        # Case of IDENTITY
        msp_principal = decode_identity(proto_msp_principal.principal)
    return msp_principal


def decode_config_signature(proto_configSignature):
    """Decodes Configuration Signature

    Args:
        proto_configSignature (str): ConfigSignature() object

    Returns: deserialized config signature after header decode.
    """
    config_signature = {}
    config_signature['signature_header'] = \
        decode_signature_header(proto_configSignature.signature_header)
    config_signature['signature'] = proto_configSignature.signature
    return config_signature


def decode_fabric_MSP_config(msp_config_bytes):
    """Decodes Fabric MSP Configuration

    Args:
        msp_config_bytes (str): Serialized configuration for MSP

    Returns: Deserialized MSP configuration and certs.
    """
    msp_config = {}
    proto_msp_config = msp_config_pb2.FabricMSPConfig()
    proto_msp_config.ParseFromString(msp_config_bytes)
    msp_config['name'] = proto_msp_config.name
    msp_config['root_certs'] = to_PEM_certs(proto_msp_config.root_certs)
    msp_config['intermediate_certs'] = \
        to_PEM_certs(proto_msp_config.intermediate_certs)
    msp_config['admins'] = to_PEM_certs(proto_msp_config.admins)
    msp_config['revocation_list'] = \
        to_PEM_certs(proto_msp_config.revocation_list)
    msp_config['signing_identity'] = \
        decode_signing_identity_info(
            proto_msp_config.signing_identity.SerializeToString())
    msp_config['crypto_config'] = \
        decode_crypto_config(
            proto_msp_config.crypto_config.SerializeToString())
    ou_identifiers = [
        decode_fabric_OU_identifier(x) for x in
        proto_msp_config.organizational_unit_identifiers]
    msp_config['organizational_unit_identifiers'] = ou_identifiers
    msp_config['tls_root_certs'] = \
        to_PEM_certs(proto_msp_config.tls_root_certs)
    msp_config['tls_intermediate_certs'] = \
        to_PEM_certs(proto_msp_config.tls_intermediate_certs)
    msp_config['fabric_node_ous'] = \
        decode_fabric_Nodes_OUs(proto_msp_config.fabric_node_ous)
    return msp_config


def decode_fabric_OU_identifier(FabricOUIdentifier):
    """Decodes Fabric OU Identifier

    Args:
        FabricOUIdentifier (str): OU Identifier

    Returns: OU Identifier object.
    """

    return {
        'certificate': FabricOUIdentifier.certificate.decode(),
        'organizational_unit_identifier':
            FabricOUIdentifier.organizational_unit_identifier
    }


def decode_fabric_Nodes_OUs(proto_node_organizational_units):
    """Decodes Fabric Node OUs

    Args:
        proto_node_organizational_units (str): OUs

    Returns: deserialized list of OU Identifier objects.
    """
    node_organizational_units = {}

    if proto_node_organizational_units:
        node_organizational_units['enable'] = \
            proto_node_organizational_units.enable
        node_organizational_units['client_ou_identifier'] = \
            decode_fabric_OU_identifier(
                proto_node_organizational_units.client_ou_identifier)
        node_organizational_units['peer_ou_identifier'] = \
            decode_fabric_OU_identifier(
                proto_node_organizational_units.peer_ou_identifier)

    return node_organizational_units


def to_PEM_certs(buffer_array_in):
    """Decodes String buffer input to PEM Certs

    Args:
        buffer_array_in (str): certificate contents buffer

    Returns: Concats buffer contents and returns certs
    """
    return [b64encode(x).decode() for x in buffer_array_in]


def decode_signing_identity_info(signing_identity_info_bytes):
    """Decodes Signing identity information from MSP Configuration

    Args:
        signing_identity_info_bytes (str): Byte string of the identity info

    Returns: deserialized signing identity information.
    """
    if signing_identity_info_bytes == b'':
        return None

    signing_identity_info = {}

    if signing_identity_info_bytes is not None:
        proto_signing_identity_info = msp_config_pb2.SigningIdentityInfo()
        proto_signing_identity_info.ParseFromString(
            signing_identity_info_bytes)
        signing_identity_info['public_signer'] = \
            proto_signing_identity_info.public_signer.decode()
        signing_identity_info['private_signer'] = \
            decode_key_info(
                proto_signing_identity_info.private_signer.SerializeToString())
    return signing_identity_info


def decode_key_info(key_info_bytes):
    """Decodes Key Infor in MSP Configuration

    Args:
        key_info_bytes (str): Byte information containing KeyInfo

    Returns: deserialized key information.
    """
    key_info = {}
    if key_info_bytes:
        proto_key_info = msp_config_pb2.KeyInfo()
        proto_key_info.ParseFromString(key_info_bytes)
        key_info['key_identifier'] = proto_key_info.key_identifier
        key_info['key_material'] = 'private'
    return key_info


def decode_crypto_config(crypto_config_bytes):
    """Decodes Crypto Config in MSP Configuration

    Args:
        crypto_config_bytes (str): Byte information of FabricCyptoConfig

    Returns: deserialized key information.
    """
    crypto_config = {}
    if crypto_config_bytes:
        proto_crypto_config = msp_config_pb2.FabricCryptoConfig()
        proto_crypto_config.ParseFromString(crypto_config_bytes)
        crypto_config['signature_hash_family'] = proto_crypto_config. \
            signature_hash_family
        crypto_config['identity_identifier_hash_function'] = \
            proto_crypto_config.identity_identifier_hash_function
    return crypto_config


def decode_chaincode_action_payload(payload_bytes):
    """Decodes chaincode action payload from ChaincodeAction

    Args:
        payload_bytes (str): Bytes buffer of the payload

    Returns: deserialized payload information and action.
    """
    payload = {}
    proto_chaincode_action_payload = transaction_pb2.ChaincodeActionPayload()
    proto_chaincode_action_payload.ParseFromString(payload_bytes)
    payload['chaincode_proposal_payload'] = \
        decode_chaincode_proposal_payload(
            proto_chaincode_action_payload.chaincode_proposal_payload)
    payload['action'] = \
        decode_chaincode_endorsed_action(proto_chaincode_action_payload.action)
    return payload


def decode_chaincode_proposal_payload(chaincode_proposal_payload_bytes):
    """Decodes chaincode proposal payload from ChaincodeProposal

    Args:
        chaincode_proposal_payload_bytes (str): Bytes of chaincode proposal

    Returns: deserialized chaincode proposal payload information
    """
    chaincode_proposal_payload = {}
    proto_chaincode_proposal_payload = proposal_pb2.ChaincodeProposalPayload()
    proto_chaincode_proposal_payload.ParseFromString(
        chaincode_proposal_payload_bytes)
    chaincode_proposal_payload['input'] = \
        proto_chaincode_proposal_payload.input
    # Transient map is not allowed to be included on the ledger.
    return chaincode_proposal_payload


def decode_chaincode_endorsed_action(proto_chaincode_endorsed_action):
    """Decodes chaincode endorsed action

    Args:
        proto_chaincode_endorsed_action = Object containing endorsements

    Returns: deserialized chaincode endorsement action.
    """
    action = {}
    action['proposal_response_payload'] = \
        decode_proposal_response_payload(
            proto_chaincode_endorsed_action.proposal_response_payload)
    action['endorsements'] = []
    for endorsement in proto_chaincode_endorsed_action.endorsements:
        endorsement = decode_endorsement(endorsement)
        action['endorsements'].append(endorsement)
    return action


def decode_endorsement(proto_endorsement):
    """Decodes each endorsement

    Args:
        proto_endorsement: Object of endorsed content containing endorser
                           & related signature

    Returns: deserialized endorsement content
    """
    endorsement = {}
    endorsement['endorser'] = decode_identity(proto_endorsement.endorser)
    endorsement['signature'] = proto_endorsement.signature
    return endorsement


def decode_proposal_response_payload(proposal_response_payload_bytes):
    """Decodes response payload in the proposal

    Args:
        proposal_response_payload_bytes: Byte string of response payload

    Returns: deserialized proposal response payload.
    """
    proposal_response_payload = {}
    proto_proposal_response_payload = \
        proposal_response_pb2.ProposalResponsePayload()
    proto_proposal_response_payload.ParseFromString(
        proposal_response_payload_bytes)
    proposal_response_payload['proposal_hash'] = \
        binascii.b2a_hex(proto_proposal_response_payload.proposal_hash)
    proposal_response_payload['extension'] = \
        decode_chaincode_action(proto_proposal_response_payload.extension)
    return proposal_response_payload


def decode_chaincode_action(action_bytes):
    """Decodes chaincode actions

    Args:
        action_bytes (str): Byte buffer of the chaincode action

    Returns: deserialized chaincode action of results, events and response
    """
    chaincode_action = {}
    proto_chaincode_action = proposal_pb2.ChaincodeAction()
    proto_chaincode_action.ParseFromString(action_bytes)
    chaincode_action['results'] = \
        decode_readwrite_sets(proto_chaincode_action.results)
    chaincode_action['events'] = \
        decode_chaincode_events(proto_chaincode_action.events)
    chaincode_action['response'] = \
        decode_response(proto_chaincode_action.response)
    chaincode_action['chaincode_id'] = \
        decode_chaincode_id(proto_chaincode_action.chaincode_id)
    return chaincode_action


def decode_chaincode_events(event_bytes):
    """Decodes events in the chaincode

    Args:
        event_bytes (str): Byte buffer of event content

    Returns: deserialized event contents.
    """
    events = {}
    proto_events = chaincode_event_pb2.ChaincodeEvent()
    proto_events.ParseFromString(event_bytes)
    events['chaincode_id'] = proto_events.chaincode_id
    events['tx_id'] = proto_events.tx_id
    events['event_name'] = proto_events.event_name
    events['payload'] = proto_events.payload
    return events


def decode_chaincode_id(proto_chaincode_id):
    """Decodes chaincode ID information

    Args:
        proto_chaincode_id: Object containing chaincode details

    Returns: deserialized chaincode ID with path, name and version.
    """
    chaincode_id = {}
    if not proto_chaincode_id:
        return chaincode_id
    chaincode_id['path'] = proto_chaincode_id.path
    chaincode_id['name'] = proto_chaincode_id.name
    chaincode_id['version'] = proto_chaincode_id.version
    return chaincode_id


def decode_readwrite_sets(rw_sets_bytes):
    """Decodes read write sets from a given TxReadWriteSet

    Args:
        rw_sets_bytes (str): Byte buffer of the TxReadWriteSet

    Returns: deserialized transaction read write set contents.
    """
    proto_tx_read_write_set = rwset_pb2.TxReadWriteSet()
    proto_tx_read_write_set.ParseFromString(rw_sets_bytes)
    tx_read_write_set = {}
    tx_read_write_set['data_model'] = proto_tx_read_write_set.data_model
    if (tx_read_write_set['data_model'] == rwset_pb2.TxReadWriteSet.KV):
        tx_read_write_set['ns_rwset'] = []
        proto_ns_rwset = proto_tx_read_write_set.ns_rwset
        for rw_set in proto_ns_rwset:
            kv_rw_set = {}
            proto_kv_rw_set = rw_set
            kv_rw_set['namespace'] = proto_kv_rw_set.namespace
            kv_rw_set['rwset'] = decode_kv_rw_set(proto_kv_rw_set.rwset)
            tx_read_write_set['ns_rwset'].append(kv_rw_set)
    else:
        tx_read_write_set['ns_rwset'] = proto_tx_read_write_set.ns_rwset
    return tx_read_write_set


def decode_kv_rw_set(kv_bytes):
    """Decodes Key Value Read Write Set from KV Bytes

    Args:
        kv_bytes (str): Buffer of key value bytes

    Returns: deserialized key value read write set of reads, writes
             and range queries information.
    """
    proto_kv_rw_set = kv_rwset_pb2.KVRWSet()
    proto_kv_rw_set.ParseFromString(kv_bytes)
    kv_rw_set = {}
    # KV readwrite set has 3 arrays
    kv_rw_set['reads'] = []
    kv_rw_set['range_queries_info'] = []
    kv_rw_set['writes'] = []
    # Build reads
    reads = kv_rw_set['reads']
    proto_reads = proto_kv_rw_set.reads
    for read in proto_reads:
        reads.append(decode_kv_read(read))
    # Build range_queries_info
    range_queries_info = kv_rw_set['range_queries_info']
    proto_range_queries_info = proto_kv_rw_set.range_queries_info
    for range_query in proto_range_queries_info:
        range_queries_info.append(decode_range_query_info(range_query))
    # Build writes
    writes = kv_rw_set['writes']
    proto_writes = proto_kv_rw_set.writes
    for write in proto_writes:
        writes.append(decode_kv_write(write))

    kv_rw_set['reads'] = reads
    kv_rw_set['range_queries_info'] = range_queries_info
    kv_rw_set['writes'] = writes
    return kv_rw_set


def decode_kv_read(proto_kv_read):
    """Decodes Key Value Read

    Args:
        proto_kv_read: Object of the key value with read contents

    Returns: deserialized key value read contents with block num and tx_num
    """
    kv_read = {}
    kv_read['key'] = proto_kv_read.key
    proto_version = proto_kv_read.version
    if proto_version:
        kv_read['version'] = {}
        kv_read['version']['block_num'] = str(proto_version.block_num)
        kv_read['version']['tx_num'] = str(proto_version.tx_num)
    else:
        kv_read['version'] = None
    return kv_read


def decode_range_query_info(proto_range_query_info):
    """Decodes range query information from KV RW sets.

    Args:
        proto_range_query_info: Object of key value read write range queries

    Returns: deserialized range query information with merkle hashes.
    """
    range_query_info = {}
    range_query_info['start_key'] = proto_range_query_info.start_key
    range_query_info['end_key'] = proto_range_query_info.end_key
    range_query_info['itr_exhausted'] = proto_range_query_info.itr_exhausted

    proto_raw_reads = proto_range_query_info.raw_reads
    if proto_raw_reads:
        range_query_info['raw_reads'] = {}
        range_query_info['raw_reads']['kv_reads'] = []
        kv_read = None
        for kv_read in proto_raw_reads.kv_reads:
            kv_read = decode_kv_read(kv_read)
            range_query_info['raw_reads']['kv_reads'].append(kv_read)

    proto_reads_merkle_hashes = proto_range_query_info.reads_merkle_hashes
    if proto_reads_merkle_hashes:
        range_query_info['reads_merkle_hashes'] = {}
        range_query_info['reads_merkle_hashes']['max_degree'] = \
            proto_reads_merkle_hashes.max_degree
        range_query_info['reads_merkle_hashes']['max_level'] = \
            proto_reads_merkle_hashes.max_level
        range_query_info['reads_merkle_hashes']['max_level_hashes'] = \
            proto_reads_merkle_hashes.max_level_hashes
    return range_query_info


def decode_kv_write(proto_kv_write):
    """Decodes key value write instance

    Args:
        proto_kv_write: Object containing key value writes

    Returns: deserialized key value write contents and values.
    """
    kv_write = {}
    kv_write['key'] = proto_kv_write.key
    kv_write['is_delete'] = proto_kv_write.is_delete
    kv_write['value'] = proto_kv_write.value
    return kv_write


def decode_response(proto_response):
    """Decodes response containing status, message and payload

    Args:
        proto_response: Object containing proto responses

    Returns: deserialized response from protobuf objects
    """
    response = {}
    if proto_response:
        response['status'] = proto_response.status
        response['message'] = proto_response.message
        response['payload'] = proto_response.payload
    return response


def decode_fabric_peers_info(peers_info_bytes):
    """Decodes Fabric Peers Information

    Args:
        peer_bytes (str): Serialized information about Peer

    Returns: Deserialized Peers information and certs.
    """
    peers_info = []

    for peer_info_bytes in peers_info_bytes:
        peer = {}

        # identity
        peer_identity = identities_pb2.SerializedIdentity()
        peer_identity.ParseFromString(peer_info_bytes.identity)
        if hasattr(peer_identity, 'mspid'):
            peer['mspid'] = peer_identity.mspid
        if hasattr(peer_identity, 'id_bytes'):
            peer['id_bytes'] = peer_identity.id_bytes.decode()

        # state info
        peer_state_info = message_pb2.GossipMessage()
        peer_state_info.ParseFromString(peer_info_bytes.state_info.payload)

        if peer_state_info.state_info.properties:

            if hasattr(peer_state_info.state_info.properties, 'ledger_height'):
                peer['ledger_height'] = int(
                    peer_state_info.state_info.properties.ledger_height)

            if hasattr(peer_state_info.state_info.properties, 'chaincodes'):
                peer['chaincodes'] = []
                if peer_state_info.state_info.properties.chaincodes:
                    ccs = peer_state_info.state_info.properties.chaincodes
                    for chaincode in ccs:
                        cc = {}
                        cc['name'] = chaincode.name
                        cc['version'] = chaincode.version
                        peer['chaincodes'].append(cc)

        # membership info
        peer_membership_info = message_pb2.GossipMessage()
        membership_payload = peer_info_bytes.membership_info.payload
        peer_membership_info.ParseFromString(membership_payload)

        peer['endpoint'] = peer_membership_info.alive_msg.membership.endpoint

        peers_info.append(peer)

    return sorted(peers_info, key=lambda peer: peer['endpoint'])


def decode_fabric_endpoints(endpoints):
    """Decodes Fabric Endpoints

    Args:
        endpoints (str): Fabric Endpoints

    Returns: Deserialized endpoints.
    """

    endpoints_info = []
    for item in endpoints:
        endpoint = {}

        endpoint['host'] = item.host
        endpoint['port'] = int(item.port)

        endpoints_info.append(endpoint)
    return endpoints_info
