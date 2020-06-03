#!/usr/bin/env bash

# Define those global variables
if [ -f ./variables.sh ]; then
 source ./variables.sh
elif [ -f ./scripts/variables.sh ]; then
 source ./scripts/variables.sh
else
    echo "Cannot find the variables.sh files, pls check"
    exit 1
fi

if [ ! -d ../${CHANNEL_ARTIFACTS} ]; then
    mkdir ../${CHANNEL_ARTIFACTS}
fi

echo "Generate genesis block for system channel for orderer"

configtxgen -configPath ../configs   -channelID ${SYS_CHANNEL}   -profile ${ORDERER_GENSIS_PROFILE}   -outputBlock ../${CHANNEL_ARTIFACTS}/${ORDERER_GENSIS}

echo "Generate the new app channel tx using configtx.yaml"

configtxgen   -configPath ../configs   -profile ${APP_CHANNEL_PROFILE}   -channelID ${APP_CHANNEL}   -outputCreateChannelTx ../${CHANNEL_ARTIFACTS}/channel.tx

configtxgen   -configPath ../configs   -inspectChannelCreateTx ../${CHANNEL_ARTIFACTS}/channel.tx > ../${CHANNEL_ARTIFACTS}/channel.json

echo "Create the anchor peer configuration tx for org1...4"

configtxgen   -configPath ../configs   -profile ${APP_CHANNEL_PROFILE}   -channelID ${APP_CHANNEL}   -asOrg ${ORG1MSP}   -outputAnchorPeersUpdate ../${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG1_TX}

configtxgen   -configPath ../configs   -profile ${APP_CHANNEL_PROFILE}   -channelID ${APP_CHANNEL}   -asOrg ${ORG2MSP}   -outputAnchorPeersUpdate ../${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG2_TX}

configtxgen   -configPath ../configs   -profile ${APP_CHANNEL_PROFILE}   -channelID ${APP_CHANNEL}   -asOrg ${ORG3MSP}   -outputAnchorPeersUpdate ../${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG3_TX}

configtxgen   -configPath ../configs   -profile ${APP_CHANNEL_PROFILE}   -channelID ${APP_CHANNEL}   -asOrg ${ORG4MSP}   -outputAnchorPeersUpdate ../${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG4_TX}
