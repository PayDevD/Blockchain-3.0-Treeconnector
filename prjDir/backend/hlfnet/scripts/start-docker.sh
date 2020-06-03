#!/bin/bash

# Copyright IBM Corp All Rights Reserved
# SPDX-License-Identifier: Apache-2.0
# Exit on first error, print all commands.

# don't rewrite paths for Windows Git Bash users
export MSYS_NO_PATHCONV=1
export COMPOSE_PROJECT_NAME=treeConnector

docker-compose -f docker-compose.yml down

docker-compose -f docker-compose.yml up -d orderer ca-doctors ca-treats ca-condomngs ca-individuals peer0.doctors peer0.treats peer0.condomngs peer0.individuals couchdb
docker ps -a

# wait for Hyperledger Fabric to start
# incase of errors when running later commands, issue export FABRIC_START_TIMEOUT=<larger number>
export FABRIC_START_TIMEOUT=5
sleep ${FABRIC_START_TIMEOUT}
