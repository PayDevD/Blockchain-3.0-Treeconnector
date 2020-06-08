#!/usr/bin/env bash

echo "install python3"
python3 --version
apt update
apt install python3-dev --fix-missing

apt install python3-pip
pip3 install --upgrade pip
pip --version
pip install grpcio

sudo apt install git make
sudo apt install -y make-guile
apt install gcc
cd /opt
git clone https://github.com/hyperledger/fabric-sdk-py.git
cd fabric*
make install

echo "install django"
pip install django
pip install djangorestframework
pip install django-cors-headers
