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

if [ ! -d cli/${CHANNEL_ARTIFACTS} ]; then
    mkdir cli/${CHANNEL_ARTIFACTS}
fi

echo "Generate genesis block for system channel using configtx.yaml"

configtxgen \
    -configPath cli \
    -channelID ${SYS_CHANNEL} \
    -profile ${ORDERER_GENSIS_PROFILE} \
    -outputBlock cli/${CHANNEL_ARTIFACTS}/${ORDERER_GENSIS}


echo "Generate the new app channel tx using configtx.yaml"

configtxgen \
    -configPath cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -outputCreateChannelTx cli/${CHANNEL_ARTIFACTS}/channel.tx

configtxgen \
    -configPath cli \
    -inspectChannelCreateTx cli/${CHANNEL_ARTIFACTS}/channel.tx > cli/${CHANNEL_ARTIFACTS}/channel.json


echo "Create the anchor peer configuration tx for org1 and org2"

configtxgen \
    -configPath cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -asOrg ${ORG1MSP} \
    -outputAnchorPeersUpdate cli/${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG1_TX}

configtxgen \
    -configPath cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -asOrg ${ORG2MSP} \
    -outputAnchorPeersUpdate cli/${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG2_TX}

configtxgen \
    -configPath cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -asOrg ${ORG3MSP} \
    -outputAnchorPeersUpdate cli/${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG3_TX}

configtxgen \
    -configPath cli \
    -profile ${APP_CHANNEL_PROFILE} \
    -channelID ${APP_CHANNEL} \
    -asOrg ${ORG4MSP} \
    -outputAnchorPeersUpdate cli/${CHANNEL_ARTIFACTS}/${UPDATE_ANCHOR_ORG4_TX}

echo "Output the json for orgs"

configtxgen \
    -configPath cli \
    -printOrg ${ORG1MSP} >cli/${CHANNEL_ARTIFACTS}/${ORG1MSP}.json

configtxgen \
    -configPath cli \
    -printOrg ${ORG2MSP} >cli/${CHANNEL_ARTIFACTS}/${ORG2MSP}.json

configtxgen \
    -configPath cli \
    -printOrg ${ORG3MSP} >cli/${CHANNEL_ARTIFACTS}/${ORG3MSP}.json

configtxgen \
    -configPath cli \
    -printOrg ${ORG4MSP} >cli/${CHANNEL_ARTIFACTS}/${ORG4MSP}.json
