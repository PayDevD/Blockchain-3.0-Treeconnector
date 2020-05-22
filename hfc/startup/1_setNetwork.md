1. 조직 구성 설정 : crypto-config.yaml
```
OrdererOrgs:
- Name: Orderer
  Domain: example.com
  CA:
      Country: US
      Province: California
      Locality: San Francisco
  Specs:
    - Hostname: orderer
PeerOrgs:
- Name: Org2
  Domain: org2.example.com
  EnableNodeOUs: true
  CA:
      Country: US
      Province: California
      Locality: San Francisco
  Template:
    Count: 2
  Users:
    Count: 1
```
환경변수 : FABRIC_CFG_PATH

2.  MSP, 채널 설정 : configtx.yaml
```

```
채널 별로 다른 네트워크를 가지므로, 채널 별로 다른 원장을 보유 가능

3. SDK 코드에서 호출하는 네트워크 설정파일
```python
from hfc.fabric import Client

cli = Client(net_profile="test/fixtures/network.json")

print(cli.organizations)
print(cli.peers)
print(cli.orderers)
print(cli.CAs)
```
