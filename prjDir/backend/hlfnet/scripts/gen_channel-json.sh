#!/usr/bin/env bash

if [ -f ./variables.sh ]; then
 source ./variables.sh
elif [ -f ./scripts/variables.sh ]; then
 source ./scripts/variables.sh
fi
echo "Output the json for org1..4"

configtxgen -configPath ../configs -printOrg ${ORG1MSP} ../${CHANNEL_ARTIFACTS}/${ORG1MSP}.json
configtxgen -configPath ../configs -printOrg ${ORG2MSP} ../${CHANNEL_ARTIFACTS}/${ORG2MSP}.json
configtxgen -configPath ../configs -printOrg ${ORG3MSP} ../${CHANNEL_ARTIFACTS}/${ORG3MSP}.json
configtxgen -configPath ../configs -printOrg ${ORG4MSP} ../${CHANNEL_ARTIFACTS}/${ORG4MSP}.json
