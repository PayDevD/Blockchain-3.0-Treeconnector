class Client(object):
    """
    사용자의 웹앱, 블록체인 상의 다른 노드들과의 상호작용을 핸들링.
    여러 체인 객체들을 보유.
    """

    def init_with_net_profile(self, profile_path='network.json'):
        """
        net_profile_json 파일을 읽어 self.network_info 딕셔너리에 저장
        """
        with open(profile_path, 'r') as profile:
            d = json.load(profile)
            self.network_info = d
        """
        네트워크 설정대로 key-value 저장소, 조직, 피어/오더러/CA 노드 객체들을 초기화
        self.객체명 = self.get_net_info(매개변수들)
        """
        orgs = self.get_net_info('organizations')
        for name in orgs:
            _logger.debug("create org with name={}".format(name))
            org = create_org(name, orgs[name], self.state_store)
            self._organizations[name] = org

    async def init_with_discovery(self, requestor, peer_target,
                                  channel_name=None):
        """
        연결설정 파일을 탐색하여
        조직, 피어, 오더러, CA 노드들을 위한 핸들러를 초기화
        """
