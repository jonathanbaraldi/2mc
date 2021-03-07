


https://www.cockroachlabs.com/docs/v20.2/start-a-local-cluster-in-docker-linux

```sh
$ docker network create -d bridge roachnet

$ docker volume create roach1
$ docker volume create roach2
$ docker volume create roach3


$ docker run -d \
	--name=roach1 \
	--hostname=roach1 \
	--net=roachnet \
	-p 26257:26257 -p 8080:8080  \
	-v "roach1:/cockroach/cockroach-data"  \
	cockroachdb/cockroach:v20.2.3 start \
	--insecure \
	--join=roach1,roach2,roach3

$ docker run -d \
	--name=roach2 \
	--hostname=roach2 \
	--net=roachnet \
	-v "roach2:/cockroach/cockroach-data" \
	cockroachdb/cockroach:v20.2.3 start \
	--insecure \
	--join=roach1,roach2,roach3
$ docker run -d \
	--name=roach3 \
	--hostname=roach3 \
	--net=roachnet \
	-v "roach3:/cockroach/cockroach-data" \
	cockroachdb/cockroach:v20.2.3 start \
	--insecure \
	--join=roach1,roach2,roach3


$ docker exec -it roach1 ./cockroach init --insecure
$ grep 'node starting' cockroach-data/roach1/logs/cockroach.log -A 11

# CockroachDB node starting at 2020-12-14 11:01:26.34274101 +0000 UTC
# build:               CCL v20.2.3 @ 2020/12/14 11:00:26 (go1.13.4) (go1.12.6)
# webui:               http://roach1:8080
# sql:                 postgresql://root@roach1:26257?sslmode=disable
# client flags:        /cockroach/cockroach <client cmd> --host=roach1:26257 --insecure
# logs:                /cockroach/cockroach-data/logs
# temp dir:            /cockroach/cockroach-data/cockroach-temp273641911
# external I/O path:   /cockroach/cockroach-data/extern
# store[0]:            path=/cockroach/cockroach-data
# status:              initialized new cluster
# clusterID:           1a705c26-e337-4b09-95a6-6e5a819f9eec
# nodeID:              1

$ docker exec -it roach1 ./cockroach sql --insecure


https://www.cockroachlabs.com/docs/v20.2/deploy-cockroachdb-on-premises-insecure#systemd



cd /Library/WebServer/Documents/devops_bkp
ssh -i curso.pem ubuntu@3.236.125.97
ssh -i curso.pem ubuntu@3.236.147.163
ssh -i curso.pem ubuntu@34.239.172.102


docker run -d \
--name=roach1 \
--hostname=roach1 \
-p 26257:26257 -p 8080:8080  \
-v "roach1:/cockroach/cockroach-data"  \
cockroachdb/cockroach:v20.2.3 start \
--insecure \
--join=3.236.125.97:26257,3.236.147.163:26257,34.239.172.102:26257


docker run -d \
--name=roach2 \
--hostname=roach2 \
-p 26257:26257 -p 8080:8080  \
-v "roach2:/cockroach/cockroach-data" \
cockroachdb/cockroach:v20.2.3 start \
--insecure \
--join=3.236.125.97:26257,3.236.147.163:26257,34.239.172.102:26257


docker run -d \
--name=roach3 \
--hostname=roach3 \
-p 26257:26257 -p 8080:8080  \
-v "roach3:/cockroach/cockroach-data" \
cockroachdb/cockroach:v20.2.3 start \
--insecure \
--join=3.236.125.97:26257,3.236.147.163:26257,34.239.172.102:26257


```






```sh 

#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh


# AWS NODE
$ aws ec2 run-instances --image-id ami-0dba2cb6798deb6d8 --count 2 --instance-type t3.small --key-name devops-ninja --security-group-ids sg-00c9550881117de86 --subnet-id subnet-09c5a4961e6056757 --user-data file://node-aws.sh --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=cockroachdb}]' 'ResourceType=volume,Tags=[{Key=Name,Value=cockroachdb}]' 


# GCP NODE
$ aws ec2 run-instances --image-id ami-0dba2cb6798deb6d8 --count 3 --instance-type t3.large --key-name devops-ninja --security-group-ids sg-00c9550881117de86 --subnet-id subnet-09c5a4961e6056757 --user-data file://k8s.sh   --block-device-mapping "[ { \"DeviceName\": \"/dev/sda1\", \"Ebs\": { \"VolumeSize\": 70 } } ]" --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=k8s}]' 'ResourceType=volume,Tags=[{Key=Name,Value=k8s}]'     

```



```sh
cd /Library/WebServer/Documents/devops_bkp
ssh -i curso.pem ubuntu@3.208.20.140
ssh -i curso.pem ubuntu@34.229.162.118
ssh -i curso.pem ubuntu@54.175.25.19
ssh -i curso.pem ubuntu@34.229.156.136

ssh -i cockroachdb.pem ubuntu@3.128.79.143
ssh -i cockroachdb.pem ubuntu@18.222.100.185

#!/bin/bash
timedatectl set-ntp no
apt-get update
apt-get install ntp
service ntp stop
ntpd -b time.google.com
service ntp start
ntpq -p
wget -qO- https://binaries.cockroachdb.com/cockroach-v20.2.3.linux-amd64.tgz | tar  xvz
sudo cp -i cockroach-v20.2.3.linux-amd64/cockroach /usr/local/bin/


cockroach start --insecure --advertise-addr=3.208.20.140 --join=3.208.20.140,34.229.162.118,54.175.25.19,34.229.156.136 --cache=.25 --max-sql-memory=.25  --background

cockroach start --insecure --advertise-addr=34.229.162.118 --join=3.208.20.140,34.229.162.118,54.175.25.19,34.229.156.136 --cache=.25 --max-sql-memory=.25  --background


cockroach start --insecure --advertise-addr=54.175.25.19 --join=3.208.20.140,34.229.162.118,54.175.25.19,34.229.156.136 --cache=.25 --max-sql-memory=.25  --background

cockroach start --insecure --advertise-addr=34.229.156.136 --join=3.208.20.140,34.229.162.118,54.175.25.19,34.229.156.136 --cache=.25 --max-sql-memory=.25  --background



workload run tpcc --drop --init --duration=20m --tolerate-errors "postgresql://root@34.229.156.136:26257/tpcc?sslmode=disable"


ssh -i cockroachdb.pem ubuntu@3.128.79.143
ssh -i cockroachdb.pem ubuntu@18.222.100.185


#!/bin/bash
timedatectl set-ntp no
apt-get update
apt-get install ntp
service ntp stop
ntpd -b time.google.com
service ntp start
ntpq -p
wget -qO- https://binaries.cockroachdb.com/cockroach-v20.2.3.linux-amd64.tgz | tar  xvz
sudo cp -i cockroach-v20.2.3.linux-amd64/cockroach /usr/local/bin/


cockroach start --insecure --advertise-addr=3.128.79.143 --join=
 34.229.162.118, 54.175.25.19, 34.229.156.136 --cache=.25 --max-sql-memory=.25  --background

cockroach start --insecure --advertise-addr=18.222.100.185 --join=3.208.20.140,34.229.162.118,54.175.25.19,34.229.156.136,3.128.79.143 --cache=.25 --max-sql-memory=.25  --background

```



# GCP

```sh

i-05518db641e40af8b - 54.210.83.85
i-0c21cd4541001102a - 52.90.106.37

ssh -i devops-ninja.pem ubuntu@54.210.83.85
ssh -i devops-ninja.pem ubuntu@52.90.106.37

cockroach start --insecure --advertise-addr=54.210.83.85 --join=54.210.83.85,52.90.106.37 --cache=.25 --max-sql-memory=.25  --background
cockroach start --insecure --advertise-addr=52.90.106.37 --join=54.210.83.85,52.90.106.37 --cache=.25 --max-sql-memory=.25  --background

cockroach init --insecure
cockroach sql --insecure

CREATE DATABASE books;
```






```sh
$ kubectl -n jonjon run cockroachdb -it \
--image=cockroachdb/cockroach:v20.2.4 \
--rm \
--restart=Never \
-- sql \
--insecure \
--host=cockroachdb.jonjon.svc.cluster.local

$ CREATE DATABASE files;
```






# INSTALAÇÃO DO ELB PARA DB

!!! CRIAR O ELB COM BALANCEAMENTO DE CARGA ENTRE AS ZONAS !!!! MUITO IMPORTANTE.


```sh
# LOAD BALANCER

# Primeiro criar as instâncias, explicar a rede, ec2, ebs - Na aws e no gcp. 

# !! ESPECIFICAR O SECURITY GROUPS DO LOAD BALANCER

$ aws elbv2 create-load-balancer --name cockroachdb --type network  --scheme internal --subnets subnet-029d881ddd31e011e subnet-09c5a4961e6056757

$ aws elbv2 modify-load-balancer-attributes \
	--load-balancer-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1 \
	--attributes '[{"Key":"load_balancing.cross_zone.enabled","Value":"true"}]'

# Key=string,Value=string
#	 "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1"

$ aws elbv2 create-target-group --name cockroachdb --protocol TCP --port 26257 --vpc-id vpc-02afbb5885b388b31 --health-check-port 8080
#	"TargetGroupArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/cockroachdb/735022396a4422c5"
	

# REGISTRAR OS TARGETS  
$ aws elbv2 register-targets --target-group-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/cockroachdb/735022396a4422c5 --targets Id=i-05518db641e40af8b Id=i-0c21cd4541001102a


# ARN DO Certificado - arn:aws:acm:us-east-1:984102645395:certificate/fa016001-254f-4127-b51a-61588b15c555
# HTTPS - CRIADO PRIMEIRO
$ aws elbv2 create-listener \
    --load-balancer-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1 \
    --protocol TCP \
    --port 26257 \
	--default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/cockroachdb/735022396a4422c5
# "ListenerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/net/cockroachdb/95cf46020db458f1/3f87271d6ce677cb"


$ aws elbv2 describe-target-health --target-group-arn targetgroup-arn

# DESCRIBE NO LISTENER
$ aws elbv2 describe-listeners --listener-arns arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/net/cockroachdb/95cf46020db458f1/3f87271d6ce677cb
```
