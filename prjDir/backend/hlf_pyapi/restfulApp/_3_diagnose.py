from . import _0_chaincode


"""
이 노드(하이퍼레저 net에 접속하는 클라이언트 노드)의 네트워크 설정 정보들
"""
HLF_NET_PATH="opt/fixtures/network.json"
cli = Client(net_profile=HLF_NET_PATH)

class DiagnoseManage():

    __init__(self):
