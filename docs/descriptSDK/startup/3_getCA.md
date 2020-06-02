# 로컬에 admin 역할로 enroll
```python
from hfc.fabric_ca.caservice import ca_service

caService = ca_service(target="http://127.0.0.1:7054")
adminEnrollment = caService.enroll("admin", "adminpw")
secret = adminEnrollment.register("user1")
```

# user 역할로 등록
```python
from hfc.fabric_ca.caservice import ca_service

caService = ca_service(target="http://127.0.0.1:7054")

user1Enrollment = caService.enroll("user1", secret)
user1ReEnrollment = caService.reenroll(user1Enrollment)
RevokedCerts, CRL = adminEnrollment.revoke("user1")
```
