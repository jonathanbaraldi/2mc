


enviar o link ou email dos top:
- mandar os curriculos
- muller maro - 


ENGLISH
	DevOps Ninja: Multicloud+Multicluster K8S+Traefik+Rancher
	https://github.com/jonathanbaraldi/devops-ninja-multicloud-multicluster-en


PORTUGUESE
	DevOps Ninja: Multicloud+Multicluster K8S+Rancher+Traefik
	https://github.com/jonathanbaraldi/devops-ninja-multicloud-multicluster-pt


OK - Definir o nome no repositório no GIT
- Colocar os logos:
	- Rancher
	- Kubernetes
	- AWS
	- Nginx
	- NODEJS
	- CockroachDB
	- GCP
	- Traefik
	- Longhorn
	- Fleet
	- Github
	- Grafana+Prometheus

- Revisar e finalizar a documentação e os textos e tudo mais, dar uma revisada geral.

- Fazer o distributed deployment

- Colocar imagens dos arquivos na parte estática, e tirar a % dos objetos.

- Colocar liveness
- resdness
- limites

# ================================================================================================



1. Introdução ao curso

	1. Conhecendo o curso e o instrutor

		Sobre o que iremos falar, 

		Pré-requisitos - Curso anterior

		- Conhecimento sobre containers
		- Conhecimento sobre kubernetes
		- Conhecimento sobre desenvolvimento de software
		- Conhecimento sobre inraestrutura

		Sobre o que o curso irá abordar, pré-requisitos, quem sou eu, etc.pegar do outro curso

		1. Requisitos
		Mostrar a arquitetura

	1. Nuvens
		Falar sobre as nuvens escolhidas, a AWS e o Google Cloud.

	1. Recursos

	Falar um pouco sobre os recursos que iremos utilzir, detalhar eles.

	2 nuvens - Preferência AWS e GCP || 2 datacenters, ou algo que simule 2 provedores distintos.
	2 ou mais domínios - DNS
	4 maquinas virtuais  na primeira nuvem
	3 manquinas virtuais na segunda nuvem

	**Explicar o que NÃO iremos fazer:**
	
	- ServiceMesh multi-cluster
	- armazenamento de objetos - distribuído
	- cache distribuído - 
	- Não iremos colocar a infra no Terraform ou Ansible ou qualquer coisa do tipo.
	Pipeline automatizado para a aplicação

	Explicar exatamente o que iremos fazer usando 2 nuvens e 2 cluster's kubernetes
	E quais os tipos de aplicações que iremos usar.



2. Conceito

	2. MultiCloud - Porquê multicloud?
	
	- Explicar sobre o conceito multi-cloud multi-cluster
	Colocar os tópicos aqui dentro que vou trabalhar com aqueles links que juntei


	2. Multicluster - Porque multi-cluster? 

	- Colocar o texto e as imagens para aqui....


3. ARQUITETURA

	3. Clouds


	3. Kubernetes


	3. Aplicação
	- Frontend
	- backend
	- database


	Iremos falar sobre as Clouds

	K8S - Explicar sobre o Kuberentes e como ele é a nossa plataforma base

	Rancher - Falar sobre o Rancher

	FALAR SOBRE A PARTE DE REDE, CRIAÇÃO DE VPC.

	E iremos falar sobre a arquitetura da aplicação. 


	# Explicar Sobre o código que iremos rodar
	- frontend
	- backend
	- database

	# Explicar os deployments - Single
	- Single
	- Distributed


4. CLOUD1 - AWS + Kubernetes + Rancher
- Fazer o codigo e colocar na pastinha da aws

	Deployment da infra 
		- Rancher
		- k8s-aws
		- dns
		- database
		- loadbalancer


		* Validar parte da VPC para as 2 redes.
		Colocar as Redes que iremos usar no treinamento - Iremos usar a default que a cloud já fornece.


		https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html

		172.31.0.0/16


		- Create a VPC with a size /16 IPv4 CIDR block (172.31.0.0/16). This provides up to 65,536 private IPv4 addresses.
		- Create a size /20 default subnet in each Availability Zone. This provides up to 4,096 addresses per subnet, a few of which are reserved for our use.
		- Create an internet gateway and connect it to your default VPC.
		- Add a route to the main route table that points all traffic (0.0.0.0/0) to the internet gateway.
		- Create a default security group and associate it with your default VPC.
		- Create a default network access control list (ACL) and associate it with your default VPC.
		- Associate the default DHCP options set for your AWS account with your default VPC.



5. CLOUD2 - GCP + Kubernetes
	fazer o código e colocar na pastinha do gcp
	
	Deployment da infra 
		- loadbalacner
		- k8s-gcp
		- database


		https://cloud.google.com/vpc/docs/vpc


		us-east1	default		10.142.0.0/20 - GATEWAY - 10.142.0.1	


6. Aplicação

	6. SINGLE DEPLOYMENT

	Fazer o deployment da aplicação modelo single, mostrar a configuração e tudo mais

	SIMULACAO DE FALHAS EM CLUSTER LOCAL


	6. DISTRIBUÍDO(DISTRIBUTED)DEPLOYMENT

	Fazer o deployment da aplicação modelo distribuído, mostrar a configuração e tudo mais
	- Trocando o banco de dados para instância


7. REVISAO

Revisar todos os itens do curso e agradecer, falar sobre os pontos a serem melhorados ainda, e que estarei atualizando o curso para que esteja sempre atualizado.












# ROADMAP - Próximas atualizações


* ROADMAP
- Terraform a infra
- Uso de VPN e SUBMARINER
- GITHUB ACTIONS para build dos containers e ver ferramenta de review de código para deploy, e depois o deployment para o Fleet - Branch especifico





Falar sobre as melhorias e uso de service mesh....submariner, comunicação intracluster.....etc.






-- CURSO EM INGLES - REVISAR O REPOSITORIO NO GIT e TODO CONTEUDO

-- CURSO EM PORTUGUES - FAZER TODO O CURSO - TERMINAR TODO CODIGO E DEPOIS TRADUZIR, TRADUZIR AS IMAGENS, E ANTES DE GRAVAR, FAZER a tradução de tudo.

# Deployment da infraestrutura 

# Deployment APP SINGLE



# Deployment APP DISTRIBUTED


# SIMULACAO DE FALHAS
	- 

- 

