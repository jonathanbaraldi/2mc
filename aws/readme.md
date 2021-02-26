
```sh 

#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh


# RANCHER SERVER
$ aws ec2 run-instances --image-id ami-0dba2cb6798deb6d8 --count 1 --instance-type t3.medium --key-name devops-ninja --security-group-ids sg-00c9550881117de86 --subnet-id subnet-09c5a4961e6056757 --user-data file://rancher.sh --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=rancherserver}]' 'ResourceType=volume,Tags=[{Key=Name,Value=rancherserver}]' 



# K8S
$ aws ec2 run-instances --image-id ami-0dba2cb6798deb6d8 --count 3 --instance-type t3.large --key-name devops-ninja --security-group-ids sg-00c9550881117de86 --subnet-id subnet-09c5a4961e6056757 --user-data file://k8s.sh   --block-device-mapping "[ { \"DeviceName\": \"/dev/sda1\", \"Ebs\": { \"VolumeSize\": 40 } } ]" --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=k8s}]' 'ResourceType=volume,Tags=[{Key=Name,Value=k8s}]'     

```






ARN do certificado

arn:aws:acm:us-east-1:984102645395:certificate/752f36c0-4437-4fc7-989f-04a189c944ee




# TRAEFIK 1.7

O Traefik é a aplicação que iremos usar como ingress. Ele irá ficar escutando pelas entradas de DNS que o cluster deve responder. Ele possui um dashboard de  monitoramento e com um resumo de todas as entradas que estão no cluster.
```sh
$ kubectl apply -f https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-rbac.yaml
$ kubectl apply -f https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-ds.yaml
$ kubectl --namespace=kube-system get pods
```
Agora iremos configurar o DNS pelo qual o Traefik irá responder. No arquivo ui.yml, localizar a url, e fazer a alteração. Após a alteração feita, iremos rodar o comando abaixo para aplicar o deployment no cluster.
```sh
$ kubectl apply -f traefik.yaml
```

# INSTALACAO DO CERTIFICADO SSL E DO CERTMANAGER

NA TELA



# INSTALAÇÃO DO ELB

```sh
# LOAD BALANCER

# Primeiro criar as instâncias, explicar a rede, ec2, ebs - Na aws e no gcp. 

# !! ESPECIFICAR O SECURITY GROUPS DO LOAD BALANCER

$ aws elbv2 create-load-balancer --name multicloud --type application --subnets subnet-029d881ddd31e011e subnet-09c5a4961e6056757
#	"LoadBalancerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/app/multicloud/0c7e036793bff35e"


$ aws elbv2 create-target-group --name mc-target2 --protocol HTTP --port 80 --vpc-id vpc-02afbb5885b388b31 --health-check-port 8080 --health-check-path /api/providers
#	 TargetGroupArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/mc-target2/a0fc77a0ad0c39f1"
	
# REGISTRAR OS TARGETS  
$ aws elbv2 register-targets --target-group-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/mc-target2/a0fc77a0ad0c39f1 --targets Id=i-0d9b9e37fd89d3daf Id=i-041ae1b34581e2c93 Id=i-0f4ffa799320d8c86 

# HTTPS - CRIADO PRIMEIRO
$ aws elbv2 create-listener \
    --load-balancer-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/app/multicloud/0c7e036793bff35e \
    --protocol HTTPS \
    --port 443 \
    --certificates CertificateArn=arn:aws:acm:us-east-1:984102645395:certificate/fa016001-254f-4127-b51a-61588b15c555   \
    --ssl-policy ELBSecurityPolicy-2016-08 --default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/mc-target2/a0fc77a0ad0c39f1
# "ListenerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/app/multicloud/0c7e036793bff35e/0a7d2ea191d831b4"



$ aws elbv2 describe-target-health --target-group-arn targetgroup-arn

# DESCRIBE NO LISTENER
$ aws elbv2 describe-listeners --listener-arns arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/app/multicloud/0c7e036793bff35e/a7386cf3e0dc3c0e


```


107.22.102.134
75.101.222.255

34.120.93.126




CLOUDFRONT com Custom origins para pegar da outra nuvem, mas mantendo o mesmo domínio.

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html


CASO queria ser usado outro domínio, não é necessário essa configuração, e o CERTIFICADO, DOMINIO, e DEMAIS FICAM NA NUVEM DE ORIGEM.



# alterar a rota dos odminios para o Rancher e para o ELB

INstalar Longhonr e Traefik, configurando







```sh
> openssl req -new -x509 -keyout cert.pem -out cert.pem -days 365 -nodes
Country Name (2 letter code) [AU]:DE
State or Province Name (full name) [Some-State]:Germany
Locality Name (eg, city) []:nameOfYourCity
Organization Name (eg, company) [Internet Widgits Pty Ltd]:nameOfYourCompany
Organizational Unit Name (eg, section) []:nameOfYourDivision
Common Name (eg, YOUR name) []:*.example.com
Email Address []:webmaster@example.com
```