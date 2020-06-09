# CA 컨테이너 up 시키기
```
docker-compose -f /blockchain3.0project/testnet2/fixtures/ca/docker-compose.yml up
```

# testnet2/fixtures 폴더 --> /opt에 복사하기(코딩 편의를 위해)
```
sudo cp -R /blockchain3.0project/testnet2/fixtures /opt
```

# 체인코드 소스코드 경로
```
mkdir /opt/fixtures/chaincode/src
```

# 폴더 설명
flask-api : node.js와 비슷. 일일이 경로 써줘야하고, API 브라우징 할 수 없어서 하다 말음
hfl_pyapi : 장고. nouse 폴더는 일반적 웹앱개발로 model을 쓸 경우라서, 우리 프로젝트에 안쓰임
총 user, tree, diagnose 세 개의 class(웹 요청을 받아서 하이퍼레저에 조작 후 결과 반환)
모두 json으로 정보가 입출력되므로 serializer 없이, views.py에서 바로 json을 넘김
즉, 웹의 요청 --> views.py --> 로직에 따라 class 호출 --> 하이퍼레저 json 결과 --> 응답

# 체인코드 개발
1. 블록의 ID에 넣어야 할 기본키(=ID)가 2종류이다.
- userID, treeID

2. 똑같은 요청을 로직으로 구분하기
- locationID에 따라 특정 지역의 의사들을 조회 --> 트랜잭션이 아닌 지역별 채널 생성으로, 즉 MSP로 처리
- orgName에 따라 나무의사 또는 개인을 구분해 체인코드 호출가능하게
- user가 의사냐, 개인이냐에 따라 같은 json 폼에 기입하는 내용(진료신청서,진단서)만 달라지게
- user가 의사냐, 개인이냐에 따라 소유(진료요청시 소유자 변경됨) 나무 조회 목록이 달라지게

3. 지금 당장 개발할 것만 개발하자
- 의사 목록 조회는 쿼리 짜는게 어려우므로, 논의했던대로 일단 프론트엔드에 목록 넣어놓고 시연하자.
- 치료(약사)는 나중에 하고, 일단 의사-개인 사이의 진료 요청-완료만 개발하자.
- 아마 치료(약사)는 진단기록을 update 하는 방향으로 가는것이 맞지 않나 싶다.
- 진단서의 모든 항목을 블록체인에 넣을 수 있는가? 없다면 file 또는 image 업로드도 가능한 모양이다.




