# 하이퍼레저 패브릭 CLI 도구 설치
```
curl -sSL https://bit.ly/2ysbOFE | bash -s -- <fabric_version> <fabric-ca_version> <thirdparty_version>
curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.0.1 1.4.6 0.4.18
```
프로젝트 디렉토리 내의 /bin 에 바이너리 명령어 CLI 도구가 설치됨
```
        configtxgen,
        configtxlator,
        cryptogen,
        discover,
        idemixgen
        orderer,
        peer,
        fabric-ca-client,
        fabric-ca-server
```

# cli 컨테이너
CLI 실행에 필요한 설정파일/환경변수를 블록체인 네트워크에 맞게 정의
```
docker-compose -f docker-compose.yml up -d cli
docker exec cli <CLI 명령어>
```
보통 cli 컨테이너를 사용하여 관리 : 환경변수 설정 안해도 돼서 편리

샘플 디렉토리 내의 /config 에 설정파일 설치
도커 컨테이너를 생성할 이미지 설치
```
export PATH=<path to download location>/bin:$PATH
echo 'export PATH=$PATH:$HOME/Downloads/fabric-samples/bin' >> ~/.bashrc
source ~/.bashrc
```

# peer 명령어
1. 정의 : 피어노드 조작 관리
2. 설정파일 : core.yaml(하이퍼레저 패브릭 CLI 기본설정 파일)
3. 환경변수 설정 필요
```
FABRIC_CFG_PATH		CORE_LOGGING_LEVEL
CORE_PEER_ADDRESS	CORE_PEER_LOCALMSPID	CORE_PEER_MSPCONFIGPATH
```
4. MSP(CA)를 위한 인증서(cert) 및 암호키(secret) 필요
5. 하위 명령어
```
chaincode [install|instantiate|invoke|package|query|signpackage|upgrade]
channel [create|fetch|join|list|update]
logging [getlevel|setlevel|revertlevels]
node [start|status]
version
```

# configtxgen
1. 정의 : 채널 구성
2. 설정파일 : configfx.yaml
3. 환경변수

# configtxlator
1. 정의 : 채널 구성(REST 서버)
2. 설정파일 : configfx.yaml
3. 환경변수

# orderer
1. 정의 : 오더러 노드
2. 설정파일 : orderer.yaml
3. 환경변수
