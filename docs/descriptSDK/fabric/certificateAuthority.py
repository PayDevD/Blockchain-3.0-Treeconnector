import logging
_logger = logging.getLogger(__name__ + ".certificateAuthority")

def create_ca(name, info):
    """
    조직 객체 ca를 생성자가 아닌 팩토리 패턴으로 생성
    """
    ca = certificateAuthority(name=name)
    ca.init_with_bundle(info)
    return ca

class certificateAuthority(object):

    def __init__(self, name='ca'):
        """네트워크 상의 조직(멤버 보유) 객체의 이름을 ca로 초기화"""
        self._name = name
        self._url = None
        self._grpc_options = dict()
        self._tlsCACerts = dict()
        self._registrar = []

    def init_with_bundle(self, info):
        """제공된 info 딕셔너리로 peer를 초기화"""
