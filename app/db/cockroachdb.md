https://www.cockroachlabs.com/docs/v20.2/start-a-local-cluster-in-docker-linux

```sh
$ docker network create -d bridge roachnet

$ docker volume create roach1
$ docker volume create roach2
$ docker volume create roach3
$ docker volume create roach4
$ docker volume create roach5

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


$ docker run -d \
	--name=roach4 \
	--hostname=roach4 \
	--net=roachnet \
	-v "roach4:/cockroach/cockroach-data" \
	cockroachdb/cockroach:v20.2.3 start \
	--insecure \
	--join=roach1,roach2,roach3,roach4

$ docker run -d \
	--name=roach5 \
	--hostname=roach5 \
	--net=roachnet \
	-v "roach5:/cockroach/cockroach-data" \
	cockroachdb/cockroach:v20.2.3 start \
	--insecure \
	--join=roach1,roach2,roach3,roach4,roach5


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