import asyncio
from hfc.fabric import Client
"""
체인코드에 날리는 트랜잭션 관련 코드 : 체인코드는 미리 설치된 상태여야
"""
HLF_NET_PATH="opt/fixtures/network.json"
CHANNEL_CONFIG_PATH = '/opt/fixtures/e2e_cli/configtx.yaml'
cli = Client(net_profile=HLF_NET_PATH)
org1_admin = cli.get_user('org1.example.com', 'Admin')

class ChannelManage():

    def __init__(self,):
        self._loop = asyncio.get_event_loop()

    def create_or_update_channel(self, request):
        """
        내부적으로 요청을 오더러에게 보내서 응답을 받아 response 객체로 반환
        """
        return cli._create_or_update_channel(request)

    def create_channel(self,
                        orderer = 'orderer.example.com',
                        requestor = orderer_admin,
                        channel_name = 'businesschannel'
                        ):
        """
        네트워크 당 1개인 오더러, 오더러 관리자 객체, 새 체널명
        """
        response = loop.run_until_complete(cli.channel_create(
            orderer, channel_name, requestor
            ))
        return response

    def update_channel(self,
                        orderer='orderer.example.com',
                        requestor=orderer_admin,
                        channel_name='businesschannel'
                        ):
        """
        네트워크 당 1개인 오더러, 오더러 관리자 객체, 새 체널명
        채널 설정 파일은 옵션
        """
        response = loop.run_until_complete(cli.channel_update(
            orderer, channel_name, requestor, config_tx=CHANNEL_CONFIG_PATH
            ))
        return response

    def get_channel_info(self, requestor=org1_admin,
                        channel_name='businesschannel',
                        peers=['peer0.org1.example.com'],
                        decode=True):
        response = loop.run_until_complete(cli.get_channel_config(
               requestor, channel_name, peers, decode
               ))
        """
        채널 이름으로 특정 채널 정보 조회
        """
        return response

    def get_peer_joined_channel(orderer='orderer.example.com',
                                requestor=org1_admin,
                                channel_name='businesschannel',
                                peers=['peer0.org1.example.com'],
                                ):
        """
        네트워크 당 1개인 오더러, 오더러 관리자 객체, 참여할 체널명, 참여시킬 피어들
        """
        response = loop.run_until_complete(cli.query_channels(
                    orderer, requestor, channel_name, peers
                    ))

    def get_peer_joined_channel(requestor=org1_admin,
                                peers=['peer0.org1.example.com'],
                                decode=True):
        response = loop.run_until_complete(cli.query_channels(
               requestor, peers, decode
               ))
        """
        peer 노드들이 참여하고 있는 채널 정보 조회
        channels {
            channel_name: "businesschannel"
        }
        """
        return response
