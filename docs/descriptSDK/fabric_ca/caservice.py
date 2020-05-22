def ca_service(target_url,cert_path,crypto,ca_name) :
    return "CAService 객체(server) 생성"

class CAService(ca_server_addr=DEFAULT_CA_ENDPOINT,
                 ca_certs_path=None, crypto=ecies(), ca_name=''):
    """
    CA-server 객체
    protocol,hostname,port 포함 문자열
    """

class CAClient(ca_server_addr, ca_cert_path, base_url, ca_name, cryptoPrimitives) :
    """CA-API와 상호작용위한 객체"""

	def generateAuthToken(requestBody, registrar) :
        """
        requestBody : 요청 내용
        registrar : 누가 요청하는지 식별하기 위한 enrollment 객체
        """
        return "CA-API에 접근하기 위한 권한 토큰"

	def enroll(enroll_ID, enroll_passwd, CSR, profile, attr_req) :
        """
        enroll_ID, enroll_passwd : 필수
        CSR, profile, attr_req : 선택
        """
        return

	def register() :
        return "secret key를 받기위해 user를 등록"

class Enrollment(private_key, enroll_Cert, CA_certChain, CA_service) :
    "register를 위해 필요한 객체"

    "getter/setter"
	def private_key() : return self._private_key
	def cert() : return self._cert
	def caCert() : return self._caCert
	def register(enrollmentID, enrollmentSecret=None, role=None,
                 affiliation=None, maxEnrollments=1, attrs=None):
        """

        """
        return CA_service.register()

    def get_attrs(): return "속성 출력"
	def revoke() :
        return "유효성 검사에 실패할 경우 enroll을 취소시킴"
	def generateCRL() :
        return "revoke, expire 날짜에 해당하는 인증서"
