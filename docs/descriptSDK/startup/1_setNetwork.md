# cryptogen 명령어
1. 정의 : 암호 키 생성
2. 설정파일 : crypto-config.yaml
3. 환경변수 : FABRIC_CFG_PATH
4. 조직, 도메인 등을 모두 설정한 후, 다음 명령어로 cert_key 디렉터리 내에 인증서와 키 생성
```
cryptogen generate \
    --config ../hlfnet/crypto-config.yaml \
    --output ../hlfnet/cert_key
```
무조건 하위 폴더명은 ordererOrganizations, peerOrganizations 로 생성됨

# MSP, 채널 설정 : configtx.yaml
채널 별로 다른 네트워크를 가지므로, 채널 별로 다른 원장을 보유 가능
```
variables.sh 수정하여 변수명으로 실행하거나, 직접 입력
```
1. 제네시스 블록 생성 for 시스템 채널
```
configtxgen -configPath ./hlfnet -channelID 'test-channel-id' -profile TreeConnChannel -outputBlock ./hlfnet/channel-info/orderer.genesis.block
```
2. App 채널 tx 생성
```
configtxgen \
    -configPath e2e_cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -outputCreateChannelTx e2e_cli/${CHANNEL_ARTIFACTS}/channel.tx

configtxgen \
    -configPath e2e_cli \
    -inspectChannelCreateTx e2e_cli/${CHANNEL_ARTIFACTS}/channel.tx > e2e_cli/${CHANNEL_ARTIFACTS}/channel.json
```
3. 앵커 피어 설정 tx 생성
```
configtxgen \
    -configPath e2e_cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -asOrg ${ORG1MSP} \
    -outputAnchorPeersUpdate e2e_cli/${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG1_TX}

configtxgen \
    -configPath e2e_cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -asOrg ${ORG2MSP} \
    -outputAnchorPeersUpdate e2e_cli/${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG2_TX}
```
4. 조직 MSP 별 json 파일 생성
```
configtxgen \
    -configPath e2e_cli \
    -printOrg ${ORG1MSP} >e2e_cli/${CHANNEL_ARTIFACTS}/${ORG1MSP}.json

configtxgen \
    -configPath e2e_cli \
    -printOrg ${ORG2MSP} >e2e_cli/${CHANNEL_ARTIFACTS}/${ORG2MSP}.json
```

# SDK 코드에서 호출하는 네트워크 설정파일
```python
from hfc.fabric import Client

cli = Client(net_profile="test/fixtures/network.json")

print(cli.organizations)
print(cli.peers)
print(cli.orderers)
print(cli.CAs)
```
