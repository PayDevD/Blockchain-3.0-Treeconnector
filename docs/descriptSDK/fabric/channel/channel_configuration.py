class ChannelConfiguration(object):

    def __init__(self, config=None, file_path=None):
        """
        (byte화된 설정, 설정파일 경로)를 받아 채널 설정 객체 생성
        설정 파일경로가 있으면, 파일을 읽어 (bytes)로 변환
        설정 파일경로가 없고 (byte형 설정)만 있으면, 객체에 이를 저장
        """

    @property
    def config(self):
        return self._config

    @config.setter
    def config(self, config):
        self._config = config
