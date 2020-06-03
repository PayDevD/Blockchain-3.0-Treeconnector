#!/usr/bin/env bash

export PATH=$GOPATH/src/github.com/hyperledger/fabric/build/bin:${PWD}/../bin:${PWD}:$PATH
export FABRIC_CFG_PATH=${PWD}
configtxgen -profile TreeConnOrdererGenesis -outputBlock ./channel-info/genesis.block
