CC_INSTALL = "install"
CC_INSTANTIATE = "deploy"
CC_INVOKE = "invoke"
CC_UPGRADE = "upgrade"
CC_QUERY = "query"

CC_TYPE_GOLANG = "GOLANG"
CC_TYPE_JAVA = "JAVA"
CC_TYPE_NODE = "NODE"
CC_TYPE_CAR = "CAR"

def create_tx_prop_req(prop_type=None, cc_path=None, cc_type=CC_TYPE_GOLANG,
                       cc_name=None, cc_version=None, fcn=None, args=None,
                       cc_endorsement_policy=None,
                       transient_map=None, packaged_cc=None,
                       collections_config=None):
    return validate(tx_prop_req)

def validate(tx_prop_req):"""트랜잭션 제안 요청의 유효성 검증"""

class TXProposalRequest(object):

    def __init__(self, prop_type=None, cc_path=None,
                 cc_type=CC_TYPE_GOLANG, cc_name=None,
                 cc_version=None, fcn=None, args=None,
                 cc_endorsement_policy=None,
                 transient_map=None, packaged_cc=None,
                 collections_config=None):
        """
            트랜잭션 제안 요청을 담은 객체
            -->속성은 '_속성명' 형태
            -->각 속성의 getter/setter 메소드가 '속성명' 형태로 존재

            cc_type (str): 체인코드 타입
            prop_type (str): 제안 타입
            packaged_cc (bytearray): 체인코드 압축형 gz.tar[bytes]
            transient_map (list): transient data map
            cc_endorsement_policy (bytearray): 체인코드 endorsement 정책
            args (list): 함수 매개변수들
            fcn (str): 함수명
            cc_version (str): 체인코드 버전
            cc_name (str): 체인코드 이름
            cc_path (str): 체인코드 경로
            collections_config: 컬렉션 설정
        """
