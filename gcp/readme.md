readme.md

https://cloudaffaire.com/how-to-create-a-compute-engine-instance-using-gcloud/

# Instanciass

```sh
$ export IMAGE_FAMILY="debian-10"
$ export ZONE="us-east1-b"
$ export INSTANCE_NAME="my-new-instance"
$ export INSTANCE_TYPE="e2-medium"


$ export INSTANCE_NAME="my-new-instance-1"
$ gcloud compute instances create $INSTANCE_NAME --zone=$ZONE  --machine-type=$INSTANCE_TYPE  --boot-disk-size=120GB  --image-family=centos-7 --image-project=centos-cloud

$ export INSTANCE_NAME="my-new-instance-2"
$ gcloud compute instances create $INSTANCE_NAME --zone=$ZONE  --machine-type=$INSTANCE_TYPE  --boot-disk-size=120GB  --image-family=centos-7 --image-project=centos-cloud

$ export INSTANCE_NAME="my-new-instance-3"
$ gcloud compute instances create $INSTANCE_NAME --zone=$ZONE  --machine-type=$INSTANCE_TYPE  --boot-disk-size=120GB  --image-family=centos-7 --image-project=centos-cloud

$ export INSTANCE_NAME="my-new-instance-4"
$ gcloud compute instances create $INSTANCE_NAME --zone=$ZONE  --machine-type=$INSTANCE_TYPE  --boot-disk-size=120GB  --image-family=centos-7 --image-project=centos-cloud --metadata-from-file startup-script=install.sh



```




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




# LoadBalancer


https://cloud.google.com/load-balancing/docs/https/ext-https-lb-simple

```sh
# Creating a managed instance group
$ gcloud compute instance-templates create lb-backend-template \
   --region=us-east1 \
   --network=default \
   --boot-disk-size=60GB \
   --subnet=default \
   --tags=allow-health-check \
   --image-family=debian-9 \
   --image-project=debian-cloud \
   --machine-type=e2-medium \
   --metadata-from-file startup-script=install.sh

# Create the managed instance group based on the template.
$ gcloud compute instance-groups managed create lb-backend-example \
   --template=lb-backend-template --size=3 --zone=us-east1-b







# Adding a named port to the instance group
$ gcloud compute instance-groups set-named-ports lb-backend-example \
    --named-ports http:80 \
    --zone us-east1-b


# Configuring a firewall rule
$ gcloud compute firewall-rules create fw-allow-health-check \
    --network=default \
    --action=allow \
    --direction=ingress \
    --source-ranges=130.211.0.0/22,35.191.0.0/16 \
    --target-tags=allow-health-check \
    --rules=tcp:80








# Reserving an external IP address
$ gcloud compute addresses create lb-ipv4-1 \
    --ip-version=IPV4 \
    --global

# Describe
$ gcloud compute addresses describe lb-ipv4-1 \
    --format="get(address)" \
    --global

#  34.120.93.126


# SETUP

# Healthcheck
$ gcloud compute health-checks create http http-basic-check \
	--port 8080 \
  --request-path /api/providers
    
# COLOCAR AQUI O CAMINHO :8080 /api/providers para responder no balanceador
# !!!!!
# SO FALTA COLOCAR O HTTPS



# Backend Service
$ gcloud compute backend-services create web-backend-service \
    --protocol=HTTP \
    --port-name=http \
    --health-checks=http-basic-check \
    --global


# Add your instance group as the backend to the backend service.
$ gcloud compute backend-services add-backend web-backend-service \
    --instance-group=lb-backend-example \
    --instance-group-zone=us-east1-b \
    --global


# Create a URL map to route the incoming requests to the default backend service.
$  gcloud compute url-maps create web-map-https \
    --default-service web-backend-service



# $ gcloud compute ssl-certificates create www-ssl-cert \
#         --certificate=certificate-file \
#         --private-key=private-key-file \
#         --global
    
#  nome do certificado que subi - devops-ninja

    
# Criar um http proxy para fazer o  roteamento
$ gcloud compute target-https-proxies create https-lb-proxy \
    --url-map web-map-https --ssl-certificates devops-ninja
    

# Criar regra global de forwarding 
$ gcloud compute forwarding-rules create https-content-rule \
    --address=lb-ipv4-1\
    --global \
    --target-https-proxy=https-lb-proxy \
    --ports=443

    

```







# CERTIFICADO


gcloud compute ssl-certificates create multicloud \
    --description=multiclou \
    --domains=multicloud.ml \
    --global


gcloud compute ssl-certificates list \
   --global


gcloud compute ssl-certificates describe multicloud \
   --global \
   --format="get(name,managed.status, managed.domainStatus)"

gcloud compute ssl-certificates describe CERTIFICATE_NAME \
   --global \
   --format="get(name,managed.status, managed.domainStatus)"