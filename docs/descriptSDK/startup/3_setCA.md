# CA 서버 설정

Certificate Signing Request (CSR)

# CA 서버 running 확인
CA 서버 실행 : 자동 초기화 --> ca-cert.pem, ca-key.pem 파일 생성
```
fabric-ca-server start -b <admin>:<adminpw>
```
HTTP가 아닌 HTTPS로 설정
```
tls.enabled=true
```
default DB 파일(MySQL: 5.7 or later)
```
/fabric-ca-server.db
```
intermediate CA 등록
```
fabric-ca-server start -b admin:adminpw -u http://<enrollmentID>:<secret>@<parentserver>:<parentport>
```
CA-server 와 REST API 통신 : CA client 또는 패브릭 SDK 사용
