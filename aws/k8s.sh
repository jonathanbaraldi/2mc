#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh
docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.5.6 --server https://3.90.1.53 --token nrprd4sllx56wshl69wlzr9mn9tccrpwlz2fxh8b7ttjzhvgwlbc4b --ca-checksum e3a999755faa99b1a7615caaceaebc6e5565b7b938d8cb6a07c8989958727eac --etcd --controlplane --worker