class Client(object):
    """
    사용자의 웹앱, 블록체인 상의 다른 노드들과의 상호작용을 핸들링.
    여러 체인 객체들을 보유.
    """

    def init_with_net_profile(self, profile_path='network.json'):
        """
        net_profile_json 파일을 읽어 객체를 초기화
        key-value 저장소
        조직, 피어, 오더러, CA 노드들을 위한 핸들러를 초기화.
        """
