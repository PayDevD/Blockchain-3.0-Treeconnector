#!/usr/bin/env bash

export SYS_CHANNEL='systemchannel-chainid'
export ORDERER_GENSIS=genesis.block
export ORDERER_GENSIS_PROFILE=TreeConnOrdererGenesis
export APP_CHANNEL="TreeConnAppChannel"
export APP_CHANNEL_PROFILE=TreeConnAppChannel
export UPDATE_ANCHOR_ORG1_TX=org_doctors_MSP_anchors.tx
export UPDATE_ANCHOR_ORG2_TX=org_treats_MSP_anchors.tx
export UPDATE_ANCHOR_ORG3_TX=org_condomngs_MSP_anchors.tx
export UPDATE_ANCHOR_ORG4_TX=org_individuals_MSP_anchors.tx
export CHANNEL_ARTIFACTS=channel-info
export ORG1MSP="doctorsMSP"
export ORG2MSP="treatsMSP"
export ORG3MSP="condomngsMSP"
export ORG4MSP="individualsMSP"
