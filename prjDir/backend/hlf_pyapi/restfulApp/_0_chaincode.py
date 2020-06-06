import asyncio
from hfc.fabric import Client
"""
체인코드에 날리는 트랜잭션 관련 코드 : 체인코드는 미리 설치된 상태여야
"""
HLF_NET_PATH="opt/fixtures/network.json"
cli = Client(net_profile=HLF_NET_PATH)
org1_admin = cli.get_user('org1.example.com', 'Admin')

class ChanincodeManage():

    def __init__(self,):
        self._loop = asyncio.get_event_loop()

    def get_installed_chaincode_list():
        response = self._loop.run_until_complete(
                    cli.query_installed_chaincodes(
                        requestor = org1_admin,
                        peers = ['peer0.org1.example.com'],
                        decode = True
                    )
               )
        """
        설치된 체인코드 정보 조회
        chaincodes {
            name: "example_cc"
            version: "v1.0"
            path: "github.com/example_cc"
            id: "\374\361\027j(\332\225\367\253\030\242\303U&\356\326\241\2003|\033\266:\314\250\032\254\221L#\006G"
        }
        """
        return response

    def get_instanted_chaincode_list():
        response = loop.run_until_complete(cli.query_instantiated_chaincodes(
               requestor=org1_admin,
               channel_name='businesschannel',
               peers=['peer0.org1.example.com'],
               decode=True
               ))
        """
        인스턴스화된 체인코드 목록 조회
        """
        return response

    def get_block_hash():
        response = loop.run_until_complete(cli.query_info(
               requestor=org1_admin,
               channel_name='businesschannel',
               peers=['peer0.org1.example.com'],
               decode=True
               ))
        """
        조회 트랜잭션(쿼리)의 현재 블록 해쉬
        height: 3
        currentBlockHash: "\\\255\317\341$\"\371\242aP\030u\325~\263!\352G\014\007\353\353\247\235<\353\020\026\345\254\252r"
        previousBlockHash: "\324\214\275z\301)\351\224 \225\306\"\250jBMa\3432r\035\023\310\250\017w\013\303!f\340\272"
        """
        return response.currentBlockHash

    def get_transaction_id():
        response = loop.run_until_complete(cli.query_block_by_hash(
               requestor=org1_admin,
               channel_name='businesschannel',
               peers=['peer0.org1.example.com'],
               block_hash=self.get_block_hash(),
               decode=True
               ))
        tx_id = response.get('data').get('data')[0].
                        get('payload').get('header').
                        get('channel_header').get('tx_id')
        return tx_id

    def search_block(blockNo=None):
        if blockNo:
            response = loop.run_until_complete(cli.query_block(
               requestor=org1_admin,
               channel_name='businesschannel',
               peers=['peer0.org1.example.com'],
               block_number=blockNo,
               decode=True
               ))
        else:
            tx_id = self.get_transaction_id()
            response = loop.run_until_complete(cli.query_block_by_txid(
                    requestor=org1_admin,
                    channel_name='businesschannel',
                    peers=['peer0.org1.example.com'],
                    tx_id=tx_id,
                    decode=True
                    ))
        return response
