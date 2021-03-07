#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh
apt install -y open-iscsi
docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.5.6 --server https://54.174.106.231 --token vfzn2qxh74qb88f5b7qjkqzd7x657sgmftmr7mrnkqmj7wzvss4k9w --ca-checksum 08045ea2c51ffbe350375eddc252a3dca7a4e88948dbdb04dfc3b15c0f234eb5 --etcd --controlplane --worker