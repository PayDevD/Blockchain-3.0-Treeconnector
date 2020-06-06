import os
from hfc.fabric.client import Client
from hfc.fabric_ca.caservice import ca_service
from hfc.fabric_network import wallet
"""
로그인에 필요한 설정 정보들
"""
HLF_NET_PATH="opt/fixtures/network.json"
cli = Client(net_profile=HLF_NET_PATH)

class UserManage():

    def __init__(self,ca_addr="localhost:7054",
                    ADMIN_ID="admin",ADMIN_SECRET="adminpw"):

        "CA 서버(컨테이너) 주소로 CA서버 객체 생성"
        if os.getenv("CA_ADDR"):
            self._ca_server = ca_service(os.getenv("CA_ADDR"))
        else:
            self._ca_server = ca_service(ca_addr)

        "관리자 계정의 사용자 등록관리 객체를 CA 서버에서 얻어옴"
        if self._ca_server:
            self._enroll_by_admin = self._ca_server.enroll(ADMIN_ID,ADMIN_SECRET)
        else:
            self._enroll_by_admin = self._ca_server.enroll("admin","adminpw")

        "user 체크용 서비스 : 권한 토큰으로 ca 서버와 통신. 반환값이 json 응답 raw객체"
        self._identity_service = self._ca_server.newIdentityService()

        "key-value 저장소(./tmp/hfc-kvs)에 user 정보 저장"
        self._key_value_userinfo = wallet.FileSystemWallet()

    def getAllUser(self):
        return self._identity_service.gelAll(self._enroll_by_admin)

    def getOneUser(self, userName):
        return self._identity_service.getOne(userName,self._enroll_by_admin)

    def enrollUser(self, userName):
        userEnrollKey = self._enroll_by_admin.register(userName)
        user_key_value = wallet.Identity(userName,userEnrollKey)
        user_key_value.CreateIdentity(self._key_value_userinfo)
        return self._identity_service.create(self._enroll_by_admin, userName)

    def updateUser(self, userName):
        
        newEnroll = self._ca_server.reenroll(oldEnroll)
        user_key_value = wallet.Identity(userName,newEnrollKey)
        user_key_value.CreateIdentity(self._key_value_userinfo)
        return self._identity_service.update(userName, self._enroll_by_admin,enrollmentSecret=newEnrollKey)

    def delUser(self, userName):
        return self._identity_service.delete(userName,self._enroll_by_admin)
