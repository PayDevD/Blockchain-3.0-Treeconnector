#!/usr/bin/env bash
docker exec hlf-py-api peer channel create -o orderer:33333 -c treeConnAppChannel -f /etc/hyperledger/channel-info/treeConnAppchannel.tx
docker exec peer0.doctors.treeconnector.com peer channel join -b treeConnAppChannel.block
docker exec peer0.treats.treeconnector.com peer channel join -b treeConnAppChannel.block
docker exec peer0.condomngs.treeconnector.com peer channel join -b treeConnAppChannel.block
docker exec peer0.individuals.treeconnector.com peer channel join -b treeConnAppChannel.block
