# 2mc



- ! Balanceadores de carga para os bancos de dados
- Arquitetura da aplicação - front end - 3 backends - 1 db




- INICIALIZAR O BANCO DE DADOS

- VER O CAMINHO DAS APIS

- VER O STSTIC COM O ARQUIVO API.js


- Fazer o balanceador de carga para os bancos de dados. 


# RODAMAP PARA CONTINUCAO
- Automação da infra através do terraform, com Github Actions
- Automação do pipeline na construção dos containers
- ServiceMesh  single e multi-cluster
- submariner





https://github.com/GoogleCloudPlatform/microservices-demo.git





## PIPELINE GITHUB ACTIONS
https://github.com/marketplace/actions/build-and-push-docker-images

- Fazer o build das imagens usando o Github Actions e publicando elas no DockerHub.
- Depois quando fizer o commit para o master, ele aplica e o Fleet? 

	* UM REPOSITORIO PARA IMAGENS DE CONTAINER ???
	* UM REPOSITORIO PARA FLEET ?


	SIM - 2 worklows - ou o mesmo, colocando tudo em IF no codigo, conforme for a branch e o evento - fazer por branch - dev



## https://www.docker.com/blog/docker-github-actions/







- Verificar o statefulset do cockroachDB para cada nuvem.



* TERMINAR NA GCP
- Criar o Balanceador via cli, para outro dominio. usando o certificado ssl
- pensar na entrega global.


- CRIAR CERTIFICADO LETS ENCRYPT PARA RODAR MULTI-CLOUD MULTI-CLUSTER 
Preciso inserir esse certificado nos demais balanceadores de carga através do mundo, para todos eles responderem na mesma URL pelo servidor DNS.


https://alejandrocelaya.blog/2016/08/16/setup-a-lets-encrypt-certificate-in-a-aws-elastic-load-balancer/



Instalar longhorn
arrumar UX da aplicação
fazer o container para servir os htmls

revisar a documentação

colocar a criação do bando de dados , no script

terminar o deployment single

iniciar o deployment distirbuído



- Instalar o longhorn
- Instalar o Traefik

# Introdução ao curso
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

# Explicar o que NÃO iremos fazer:
	
	- ServiceMesh multi-cluster
	- armazenamento de objetos - distribuído
	- cache distribuído - 
	- Não iremos colocar a infra no Terraform ou Ansible ou qualquer coisa do tipo.
	Pipeline automatizado para a aplicação

# REQUISITOS

2 nuvens - Preferência AWS e GCP || 2 datacenters, ou algo que simule 2 provedores distintos.
2 ou mais domínios - DNS
4 maquinas virtuais  na primeira nuvem
3 manquinas virtuais na segunda nuvem


## CONCEITO

# Explicar sobre o conceito multi-cloud multi-cluster
Colocar os tópicos aqui dentro que vou trabalhar com aqueles links que juntei
fazer pelo menos 3 aulas
	


- Colocar o texto e as imagens para aqui....


	
## ARQUITETURA

# FALAR SOBRE A PARTE DE REDE, CRIAÇÃO DE VPC.


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


## CLOUD2 - GCP
fazer o código e colocar na pastinha do gcp
	
	Deployment da infra 
		- loadbalacner
		- k8s-gcp
		- database


## SIMPLES(SINGLE) DEPLOYMENT

	Fazer o deployment da aplicação modelo single, mostrar a configuração e tudo mais

	SIMULACAO DE FALHAS EM CLUSTER LOCAL



## DISTRIBUÍDO(DISTRIBUTED)DEPLOYMENT

	Fazer o deployment da aplicação modelo single, mostrar a configuração e tudo mais
	- Trocando o banco de dados para instância

	SIMULACAO DE FALHAS EM CLUSTER LOCAL
	SIMULACAO DE FALHA DE NUVEM


## REVISAO

Revisar todos os itens do curso e agradecer, falar sobre os pontos a serem melhorados ainda, e que estarei atualizando o curso para que esteja sempre atualizado.

Falar sobre as melhorias e uso de service mesh....submariner, comunicação intracluster.....etc.






-- CURSO EM INGLES - REVISAR O REPOSITORIO NO GIT e TODO CONTEUDO

-- CURSO EM PORTUGUES - FAZER TODO O CURSO - TERMINAR TODO CODIGO E DEPOIS TRADUZIR, TRADUZIR AS IMAGENS, E ANTES DE GRAVAR, FAZER a tradução de tudo.

# Deployment da infraestrutura 



# Deployment APP SINGLE



# Deployment APP DISTRIBUTED


# SIMULACAO DE FALHAS
	- 

- 




