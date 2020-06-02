# 컨테이너 동작 설정 : docker-compose-xxxx.yaml
도커 컨테이너의 통신을 위한 포트번호, 저장할 디렉토리 경로, 도커 구동 명령어
--> 매번 도커 명령어 입력할 필요 없이, 도커 컴포즈로 간단히 실행하기 위함
1. ca-base 선언, extends로 각 조직별 ca 컨테이너 선언
```
cd ../cert_key/peerOrganizationsanizations
find | grep -E '/ca.*_sk' | sort
```
도메인명, 포트, CORE_PEER_TLS_KEY_FILE=조직별 비밀키 파일명
```
services:
  ca:
    container_name: fabric-ca
    image: hyperledger/fabric-ca:${HLF_VERSION}
    ports:
      - "7054:7054"
    volumes:
      - ../ca/fabric-ca-server:/etc/hyperledger/fabric-ca-server
    command: bash -c "fabric-ca-server start  --ca.certfile /etc/hyperledger/fabric-ca-server/ca-cert.pem  --ca.keyfile /etc/hyperledger/fabric-ca-server/ca-key.pem -c /etc/hyperledger/fabric-ca-server/cert_key.yaml -b admin:adminpw"
```
2. Orderer 컨데이너 설정
```
orderer:
  container_name: fabric-orderer
  image: hyperledger/fabric-orderer:${HLF_VERSION}
  environment:
    - ORDERER_GENERAL_ORDERERTYPE=solo
  ports:
    - "7050:7050"
  command: orderer
```
3. Peer 컨테이너 설정
```
peer:
  container_name: fabric-peer
  image: hyperledger/fabric-peer:${HLF_VERSION}
  environment:
    - CORE_PEER_ID=peer0
  ports:
      - "7051:7051"
      - "7052:7052"
      - "7053:7053"
  volumes:
      - /var/run/docker.sock:/var/run/docker.sock
  links:
      - orderer
      - ca
  command: peer node start
```
# 포트 규칙
kafka brokers 노드 = 22222
네트워크별 orderer 노드 = 33333, 33334, 33335 ... : 33333
couchdb 노드 = 44444, 44445, 44446, ... : 44444
조직별 CA 노드 = 51xx0, 52xx0, 53xx0 ... : 55555
조직별 peer 노드 = 51xx1, 51xx2, 51xx3 ... : 50000~50009
```
- "50000"  # Rest
- "50001"  # Grpc --> 앵커 피어(조직 간 가십 프로토콜)
- "50002"  # Peer CLI
- "50003"  # Peer Event
- "50004"  # eCAP
- "50005"  # eCAA
- "50006"  # tCAP
- "50007"  # eCAA
- "50008"  # tlsCAP
- "50009"  # tlsCAA
```

# 호스트-컨테이너 간 디스크 연동
삭제가 안되어서 보니 호스트의 아이디가 보인다.
```
rm -rf /opt/gopath
rm: cannot remove '/prjPath/hyperledger/fabric/peer/cert_key': Device or resource busy
drwxr-xr-x 2 1001 1001 4096 May 30 07:02 .
drwxr-xr-x 3 root root 4096 May 28 10:01 ..
```
역시나 컴포즈 파일을 보니 chaincode, cert_key를 연동해놨다. /var/run은 호스트와의 도커 소켓 통신 때문
```
volumes:
      - /var/run/:/host/var/run/
      - ./../chaincode/:/prjPath/
      - ./cert_key:/prjPath/hyperledger/fabric/peer/cert_key/
```
# 프로젝트 폴더 - 컨테이너 간 매핑 구조
프로젝트 폴더 구조와 매핑을 어떻게 할지는 개발자의 자유!!
1. 모든 컨테이너들은 /etc/hyperledger 아래에 msp 정보(조직의 cert_key) 저장
```
ca.<도메인명>:
    ./cert_key/peerOrganizations/<조직명>.<도메인명>/ca/
        :/etc/hyperledger/cert_key
orderer.<도메인명>:
    ./channel-info/
        :/etc/hyperledger/configtx
    ./cert_key/ordererOrganizations/<도메인명>/orderers/orderer.<도메인명>/
        :/etc/hyperledger/msp/orderer
    ./cert_key/peerOrganizations/<조직명>.<도메인명>/peers/<peer노드명>.<조직명>.<도메인명>/
        :/etc/hyperledger/msp/peer<조직명>
<peer노드명>.<조직명>.<도메인명>:
    /var/run/
        :/host/var/run/
    ./channel-info
        :/etc/hyperledger/configtx
    ./cert_key/peerOrganizations/<조직명>.<도메인명>/peers/<peer노드명>.<조직명>.<도메인명>/msp
        :/etc/hyperledger/msp/peer
    ./cert_key/peerOrganizations/<조직명>.<도메인명>/users
        :/etc/hyperledger/msp/users
```
- 명칭 변경 : config --> channel-info / crypto-config --> cert_key
2. cli 앱 컨테이너만 프로젝트 폴더 저장경로와 매핑
```
cli:
    /var/run/
        :/host/var/run/
    ./../chaincode/
        :/prjPath/
    ./cert_key
        :/prjPath/hyperledger/fabric/peer/cert_key/
```
