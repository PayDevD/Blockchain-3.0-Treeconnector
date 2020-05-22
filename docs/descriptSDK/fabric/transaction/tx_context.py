from hfc.util.utils import create_serialized_identity

def create_tx_context(user, crypto, tx_prop_req, prop_wait_time=-1):
    """
        tx_prop_req: 트랜잭션 제안 요청
        user: user 객체
        crypto: crypto 객체
        prop_wait_time: 제안 대기 시간
    """
    tx_context = TXContext(user, crypto, tx_prop_req, prop_wait_time)
    return validate(tx_context)

def validate(tx_context):
    return tx_context

class TXContext(object):

    def __init__(self, user, crypto, tx_prop_req, prop_wait_time=-1):
        """
            prop_wait_time (int): 제안 요청 대기 타임아웃
            tx_prop_req (object): 트랜잭션 제안 요청
            user: user 객체
            crypto: crypto 객체
        """
        self._tx_prop_req = tx_prop_req
        self._user = user
        self._crypto = crypto
        self._identity = create_serialized_identity(user)
        self._nonce = crypto.generate_nonce(24)
        hash_func = crypto.hash
        self._tx_id = hash_func(self._nonce + self._identity).hexdigest()
        self._prop_wait_time = prop_wait_time

    def get_attrs(self):"트랜잭션 context 객체의 속성을 딕셔너리형으로 추출"

    def __str__(self): "속성을 포맷에 맞게 출력"

    @property
    def tx_id(self):""" Get transaction id."""

    @property
    def nonce(self):""" Get nonce"""

    @property
    def identity(self):"""Get identity"""

    @property
    def prop_wait_time(self):"""Get proposal wait time"""

    @prop_wait_time.setter
    def prop_wait_time(self, proposal_wait_time):"""Set proposal wait time"""

    @property
    def tx_prop_req(self):"""Get transaction proposal request"""

    @property
    def user(self):"""Get request user"""

    @property
    def crypto(self):"""Get """

    @tx_prop_req.setter
    def tx_prop_req(self, tx_prop_req):"""Set transaction proposal request"""

    def sign(self, plain_text):"""Sign the text"""
