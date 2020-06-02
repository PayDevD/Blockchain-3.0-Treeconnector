## 도커 이미지 검색 및 다운로드
```
docker images
docker search <이미지명>
docker pull <이미지명>:<태그>
docker pull ubuntu:latest
docker images
```

## 컨테이너 실행
```
docker container run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
docker container run -it --name=ubuntu1 ubuntu:16.04

-d 	detached mode 흔히 말하는 백그라운드 모드
-p 	호스트와 컨테이너의 포트를 연결 (포워딩) [host포트]:[docker포트]
-v 	호스트와 컨테이너의 디렉토리를 연결 (마운트)
-e 	컨테이너 내에서 사용할 환경변수 설정
–name 	컨테이너 이름 설정
–rm 	프로세스 종료시 컨테이너 자동 제거
-it 	-i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션
–link 	다른 컨테이너와 연결 [컨테이너명:별칭]

docker run -it -p 81:80 -p 8081:8080 --name=myContainer ubuntu:16.04
```

## 컨테이너 접속/탈출
```
docker attach ubuntu1
docker exec -it ubuntu1 bash
exit
```

## 컨테이너 삭제
컨테이너 안의 모든 파일 삭제 --> 필요한 데이터는 외부 저장소에 따로 백업
```
docker stop <이미지명>
docker kill <이미지명>
docker rm [-f] <이미지명>
```
멈춰있는 container를 모두 지우고, 태그안된 image 등을 깔끔하게 삭제합니다
```
docker system prune
```

# 파일 복사
컨테이너의 파일 --> 호스트로 복사
```
docker container cp mynginx2:/etc/nginx/conf.d/default.conf ./default.conf
```
파일의 location을 보면 root : /usr/share/nginx/html

호스트 파일 --> 컨테이너로 복사
```
echo "hello world!" > test.html
docker cp ./test.html mynginx2:/usr/share/nginx/html/test.html
```

# 이미지 스냅샷 찍기
컨테이너에 새로운 내용을 추가/변경한 후 commit하여 스냅샷 생성
```
docker diff 컨테이너ID

C /home
A /home/clusters
A /home/clusters/Documents
C /root
```
C(change),A(add),D(delete)
```
docker commit -m “test” -a “sjha” apache_tomcat ubuntu_new
docker commit -m "커밋할 이름" 컨테이너ID 원하는이미지이름:버전명
docker images
```

## 이미지 삭제
```
docker rmi <이미지명>
docker images
```
# 깃랩의 컨테이너 레지스트리에 로그인
```
docker login registry.gitlab.com
```

# 이미지를 깃랩 형식에 맞춰서 빌드, 푸쉬
```
docker build --tag <원격저장소 도메인>/[그룹명]/[프로젝트명]/<이미지명>
docker build --tag registry.gitlab.com/bloggerjp/blockchain3.0project
docker push <원격저장소 도메인>/[그룹명]/[프로젝트명]/<이미지명>
docker push registry.gitlab.com/bloggerjp/blockchain3.0project
```

* 도커 설치할 때 /home/docker 로 도커 관련 파일 저장소를 옮겼으니, 필요시 참고
* next.js --> RESTful 통신 --> django(하이퍼레저 client SDK) --> 조작 --> 하이퍼레저 시스템의 노드들
* 프론트엔드 벡엔드 나뉘어져 있으므로 모든 것을 log 로 찍을 수 있음
postman 설치
```
wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
sudo tar -xzf postman.tar.gz -C /opt
sudo ln -s /opt/Postman/Postman /usr/bin/postman
```
Ubuntu 탐색기에서 검색 및 이용할 수 있도록
```
cat > ~/.local/share/applications/postman.desktop <<EOL
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=postman
Icon=/opt/Postman/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
EOL
```
