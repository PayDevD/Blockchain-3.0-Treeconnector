#!/usr/bin/env bash
# Define those global variables
#rm -rf ../cert_key
rm -rf ../channel-info
#rm -rf ../.hfc-key-store/*

docker-compose -f docker-compose.yml kill && docker-compose -f docker-compose.yml down
docker container stop $(docker ps -aq)
docker container rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)
