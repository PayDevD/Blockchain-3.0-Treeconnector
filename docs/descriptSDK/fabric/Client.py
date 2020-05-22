class Client(object):
    """
    사용자의 웹앱, 블록체인 상의 다른 노드들과의 상호작용을 핸들링.
    여러 체인 객체들을 보유.
    """

    def init_with_net_profile(self, profile_path='network.json'):
        """
        net_profile_json 파일을 읽어 self.network_info 딕셔너리에 저장
        네트워크 설정대로 key-value 저장소, 조직, 피어/오더러/CA 노드 객체들을 초기화
        self.객체명 = self.get_net_info(매개변수들)
        """
        self._crypto_suite = None
        self._tx_context = None
        self.kv_store_path = None
        self._state_store = None
        self._is_dev_mode = False
        self._client_key_path = None
        self._client_cert_path = None
        self.network_info = dict()

        self._organizations = dict()
        self._users = dict()
        self._channels = dict()
        self._peers = dict()
        self._orderers = dict()
        self._CAs = dict()
        self.init_with_net_profile(net_profile)

    async def init_with_discovery(self, requestor, peer_target,
                                  channel_name=None):
        """
        연결설정 파일을 탐색하여
        조직, 피어, 오더러, CA 노드들을 위한 핸들러를 초기화
        """

    async def init_with_discovery(self, requestor, peer_target,
                                  channel_name=None):
        """
        orgs, peers, orderers, ca 노드를 위한 핸들러 초기화
        """

    async def close_grpc_channels(self):
        """
        peer/orderer 노드들의 gRPC 채널을 닫음
        """

    def set_tls_client_cert_and_key(self, client_key_file=None,
                                    client_cert_file=None):
        """
        모든 peer와 orderer 노드 간의 mutual TLS 통신을 위해
        TLS client cert와 key를 설정
        """

    def get_user(self, org_name, name):
        """
        조직명, user명으로 user 객체 얻기
        """

    def get_orderer(self, name):
        """
        orderer 노드명으로 orderer 객체 얻기
        """

    def get_peer(self, name):
        """
        peer 노드명으로 peer 객체 얻기
        """

    def export_net_profile(self, export_file='network_exported.json'):
        """
        self.network_info를 .json 파일로 저장
        """

    def get_net_info(self, *key_path):
        """
        self.network_info 로부터 네트워크 정보 얻기
        """
