# 컨테이너 동작 설정 : docker-conpose-xxxx.yaml
1.  도커 컨테이너의 통신을 위한 포트번호, 저장할 디렉토리 경로, 도커 구동 명령어
--> 매번 도커 명령어 입력할 필요 없이, 도커 컴포즈로 간단히 실행하기 위함
```
services:
  ca:
    container_name: fabric-ca
    image: hyperledger/fabric-ca:${HLF_VERSION}
    ports:
      - "7054:7054"
    volumes:
      - ../ca/fabric-ca-server:/etc/hyperledger/fabric-ca-server
    command: bash -c "fabric-ca-server start  --ca.certfile /etc/hyperledger/fabric-ca-server/ca-cert.pem  --ca.keyfile /etc/hyperledger/fabric-ca-server/ca-key.pem -c /etc/hyperledger/fabric-ca-server/fabric-ca-server-config.yaml -b admin:adminpw"
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
