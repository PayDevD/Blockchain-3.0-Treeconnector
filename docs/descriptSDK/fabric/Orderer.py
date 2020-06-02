import logging
from _sha256 import sha256

from hfc.protos.common import common_pb2
from hfc.protos.orderer import ab_pb2_grpc
from hfc.protos.utils import create_seek_info, create_seek_payload, \
    create_envelope
from hfc.util.channel import create_grpc_channel
from hfc.util.utils import current_timestamp, \
    build_header, build_channel_header, stream_envelope, pem_to_der

DEFAULT_ORDERER_ENDPOINT = 'localhost:7050'
_logger = logging.getLogger(__name__ + ".orderer")

class Orderer(object):

    def __init__(self, name='orderer', endpoint=DEFAULT_ORDERER_ENDPOINT,
                 tls_ca_cert_file=None, client_key_file=None,
                 client_cert_file=None, opts=None):
        """
        endpoint: 특정한 grpc 채널 주소, default=DEFAULT_ORDERER_ENDPOINT
        opts: grpc 추가설정 튜플((key, val),)
        """
        self._name = name
        self._endpoint = endpoint
        if opts:
            self._grpc_options = {key: value for (key, value) in opts}
        else:
            self._grpc_options = dict()

        self._ssl_target_name = None
        self._tls_ca_certs_path = tls_ca_cert_file
        self._client_key_path = client_key_file
        self._client_cert_path = client_cert_file
        self._channel = create_grpc_channel(self._endpoint, tls_ca_cert_file,
                                            client_key_file,
                                            client_cert_file, opts)
        self._orderer_client = ab_pb2_grpc.AtomicBroadcastStub(self._channel)

    def init_with_bundle(self, info):
        "주어진 info 딕셔너리로 객체 초기화"

    def get_genesis_block(self, tx_context, channel_name):
        "채널의 제네시스 블록 생성, 스트림으로 응답"

        seek_info_header = build_channel_header(
            common_pb2.HeaderType.Value('DELIVER_SEEK_INFO'),
            tx_context.tx_id,
            channel_name,
            current_timestamp(),
            tx_context.epoch,
            **kwargs
        )
        return self.delivery(envelope)

    def broadcast(self, envelope):
        """
        orderer에게 envelope를 broadcast
        """
        _logger.debug("Send envelope={}".format(envelope))
        return self._orderer_client.Broadcast(stream_envelope(envelope))

    def delivery(self, envelope, scheduler=None):
        """
        orderer에게 envelope를 전달
        """
        _logger.debug("Send envelope={}".format(envelope))
        return self._orderer_client.Deliver(stream_envelope(envelope))

    def get_attrs(self):
        "딕셔너리로 속성 얻기"

    def __str__(self):
        "문자열로 속성 출력"

    @property
    def endpoint(self):
        return self._endpoint

    @property
    def name(self):
        return self._name

    def _handle_response_stream(self, responses):
        for response in responses:
            return response, self

    def set_tls_client_cert_and_key(self, client_key_file=None,
                                    client_cert_file=None):
        """
        상호 TLS 연결을 위한 client의 개인키, X.509 인증서 저장 경로(문자열) 설정
        """
        return True
