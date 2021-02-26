# Tarefas

- Mensagem de OK quando inserir, e refazer reload do relatório.
- Alinhar o formulário

Fazer os efeitos

- Ajustar as cores e o CSS

- 

- Corrigir a inserção dos itens com efeitos que estão sendo inseridos.

- Colocar o CSS


FROM nginx:alpine
COPY . /usr/share/nginx/html


docker build -t jonathanbaraldi/2mc-static:v1 .

docker run -d -p 8080:80 jonathanbaraldi/2mc-static:v1




docker build -t jonathanbaraldi/2mc-api:dev .