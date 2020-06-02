class certificateService(CAclient) :
    "CA client 객체의 서명을 검증하는 객체"

    def getCertificates(self, registrar, id=None, aki=None, serial=None,
                        revoked_start=None, revoked_end=None,
                        expired_start=None, expired_end=None,
                        notexpired=None, notrevoked=None, caName=None):
        """
        enrollment ID
        aki(Authority Key Identifier) : 특정 인증서를 위한 식별자[hex_str]
        serial : 인증서의 시리얼 넘버
        notexpired : 설정되면 만기된 인증서 반환 안함
        notrevoked : 설정되면 폐기된 인증서 반환 안함
        caName : 서버 내에서의 CA 이름(없으면 default CA)
        """
        return

	def getCertificates() :
        return "소유한 인증서에 대한 정보를 쿼리로 조회하여 Dictonary형으로 반환""
