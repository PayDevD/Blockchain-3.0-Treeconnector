from hfc.fabric.client import Client
from hfc.util.keyvaluestore import file_key_value_store

from . import _0_chaincode, _0_channel, _1_user
"""
하이퍼레저 net에 접속하는 클라이언트 노드
"""
cli = _1_user.cli

class TreeManage():

    def __init__(self, userID, orgName):
        """
        key-value 저장소(./tmp/hfc-kvs)의 key로 User 객체 생성
        """
        path=os.getcwd()+'/tmp/hfc-kvs'+'/'+userID
        self._user = User(userID, orgName, file_key_value_store(path))

    def getAllTree(self):
        return

    def getAllMyTree(self):
        """
        getAllTree에서 조건을 userID로 거르던지,
        애초에 나무ID에 userID를 넣어서 조회하던지(추천-user종류별로 분류가능)
        """
        userID = self._user.name()
        return

    def getOneTree(self,treeID):
        return

    def enrollMyTree(self,treeID,treeInfos):
        """
        treeID는 블록에 기록된 나무의 고유한 ID값
        """
        userID = self._user.name()
        return

    def updateMyTree(self,treeID,treeInfos):
        return

    def delMyTree(self,treeID):
        return
