#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh
apt install -y open-iscsi
docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run rancher/rancher-agent:v2.5.5 --server https://3.90.69.10 --token n4sl964cz86vx2bngb88pdrx9r4kf5dzc7smqkz4969tnx9hrtn252 --ca-checksum c026c7103c9ceee76ab75dffc03cc55464efcac1c51e6393159892953beeb629 --etcd --controlplane --worker