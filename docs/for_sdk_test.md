# CA 컨테이너 up 시키기
```
docker-compose -f test/fixtures/ca/docker-compose.yml up
```

# testnet2/fixtures 폴더 --> /opt에 복사하기(코딩 편의를 위해)
```
sudo cp -R ./testnet2/fixtures /opt
```

# 폴더 설명
flask-api : node.js와 비슷. 일일이 경로 써줘야하고, API 브라우징 할 수 없어서 하다 말음
hfl_pyapi : 장고. nouser는 일반적 웹앱개발로 model을 쓸 경우라서, 우리 프로젝트에 안쓰임
총 user, tree, diagnode 세 개의 class(웹 요청을 받아서 하이퍼레저에 조작 후 결과 반환)
모두 json으로 정보가 입출력되므로 serializer 없이, views.py에서 바로 json을 넘김
즉, 웹의 요청 --> views.py --> 로직에 따라 class 호출 --> 하이퍼레저 json 결과 --> 응답
