from hfc.fabric.client import Client
from . import _0_chaincode, _0_channel, _1_user

"""
하이퍼레저 net에 접속하는 클라이언트 노드
"""
cli = _1_user.cli

class DiagnoseManage():

    def __init__(self, userID, orgName):
        """
        key-value 저장소(./tmp/hfc-kvs)의 key로 User 객체 생성
        """
        path=os.getcwd()+'/tmp/hfc-kvs'+'/'+userID
        self._user = User(userID, orgName, file_key_value_store(path))

    def showAllDoctors(self):
        """
        (어려움-나중에 개발)내 지역의 의사 조직에 속한 User들을 조회
        조직별로 admin 유저가 다르므로 _1_user 에서 가져다쓰기
        """
        return

    def showOneDoctors(self):
        """
        (어려움-나중에 개발)내 지역의 의사 조직에서 특정 UserID 조회
        """
        return

    def enrollNewDiagnose(self):
        """
        user가 의사냐, 개인이냐에 따라
        같은 json 폼에 기입하는 내용(진료신청서,진단서)만 달라지게
        근데..진단 내용이 블록체인에 다 들어가나?
        """
        return

    def updateDiagnose(self):
        """
        개인이 enroll로 새 진단서 등록하면,
        의사가 그 진단내용을 업데이트하도록
        """
        return

    def deleteDiagnose(self):
        """
        진단이 도중에 파기되는 특별한 경우를 위해
        """
        return
