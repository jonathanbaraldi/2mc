

- Colocar imagens dos arquivos na parte estática, e tirar a % dos objetos.

- Colocar liveness
- resdness
- limites

# ================================================================================================





# Introdução ao curso


## Como se achar, mostrar repositório , ordem das pastas o que cada uma irá conter...

	Sobre o que iremos falar, 

	Pré-requisitos - Curso anterior

	- Conhecimento sobre containers
	- Conhecimento sobre kubernetes
	- Conhecimento sobre desenvolvimento de software
	- Conhecimento sobre inraestrutura
	- 


SECOES

## INTRODUCAO

	Sobre o que o curso irá abordar, pré-requisitos, quem sou eu, etc.pegar do outro curso




# REQUISITOS

Mostrar a arquitetura

2 nuvens - Preferência AWS e GCP || 2 datacenters, ou algo que simule 2 provedores distintos.
2 ou mais domínios - DNS
4 maquinas virtuais  na primeira nuvem
3 manquinas virtuais na segunda nuvem


	# Explicar o que NÃO iremos fazer:
	
	- ServiceMesh multi-cluster
	- armazenamento de objetos - distribuído
	- cache distribuído - 
	- Não iremos colocar a infra no Terraform ou Ansible ou qualquer coisa do tipo.
	Pipeline automatizado para a aplicação


Explicar exatamente o que iremos fazer usando 2 nuvens e 2 cluster's kubernetes
E quais os tipos de aplicações que iremos usar.


## CONCEITO
	
- Explicar sobre o conceito multi-cloud multi-cluster
Colocar os tópicos aqui dentro que vou trabalhar com aqueles links que juntei
fazer pelo menos 3 aulas

- Colocar o texto e as imagens para aqui....








## ARQUITETURA

	Iremos falar sobre as Clouds

	K8S - Explicar sobre o Kuberentes e como ele é a nossa plataforma base

	Rancher - Falar sobre o Rancher

	FALAR SOBRE A PARTE DE REDE, CRIAÇÃO DE VPC.


# Explicar sobre a arquitetura de infraestrutura


	Desenho
# Explicar sobre a arquitetura da aplicação

	Desenho da arquitetura de aplicação


## APLICACAO

# Explicar Sobre o código que iremos rodar
- frontend
- backend
- database


# Explicar os deployments - Single
- Single
- Distributed



## CLOUD1 - AWS
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



## CLOUD2 - GCP
fazer o código e colocar na pastinha do gcp
	
	Deployment da infra 
		- loadbalacner
		- k8s-gcp
		- database


		https://cloud.google.com/vpc/docs/vpc


		us-east1	default		10.142.0.0/20 - GATEWAY - 10.142.0.1	


# Tipos de deployment


## SIMPLES(SINGLE) DEPLOYMENT

	Fazer o deployment da aplicação modelo single, mostrar a configuração e tudo mais

	SIMULACAO DE FALHAS EM CLUSTER LOCAL


## DISTRIBUÍDO(DISTRIBUTED)DEPLOYMENT

	Fazer o deployment da aplicação modelo distribuído, mostrar a configuração e tudo mais
	- Trocando o banco de dados para instância




## REVISAO

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

