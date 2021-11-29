# Integration-Pipedrive-Bling
API RESTful de integração entre as plataformas Pipedrive e Bling

## Guia de instalação e execução
* Para instalar basta executar o comando **npm install** ou **yarn install**
* Para execução, utilizar o comando **npm start** ou **yarn start**

## Configuração de ambiente
Inicialmente é necessário configurar as variáveis de ambiente no arquivo ***.env***
* ***SERVER_PORT***= PORTA DO SERVIDOR
* ***MONGO_USER***= USUÁRIO DO MongoDB
* ***MONGO_PASSWORD***=SENHA DO MongoDB
* ***MONGO_HOST***=HOST DO MongoDB
* ***MONGO_DATABASE***=DATABASE DO MongoDB
* ***BLING_URL***= URL API BLING
* ***BLING_KEY***= CHAVE DE ACESSO BLING
* ***PIPEDRIVE_URL***= URL API PIPEDRIVE
* ***PIPEDRIVE_KEY***= CHAVE DE ACESSO PIPEDRIVE

## END_POINTS:
* **GET**: /orders
> Realiza a busca de pedidos
* **GET**: /orders?page=number&perPage=number
> Query **page** passa o parâmetro do número de páginas e a **perPage** a quantidade por página
* **POST**: /orders
> Realiza a integração entre os sistemas Pipedrive e Bling

## O QUE A API É CAPAZ DE REALIZAR?
1. Realiza a busca de negócios ganhos na plataforma Pipedrive e registra um pedido de venda na plataforma Bling
2. Não permite o registro do mesmo negócio na plataforma Bling
3. Realiza a persistência de dados das ordens no banco MongoDB
4. Realiza a listagem das ordens que foram registradas na plataforma Bling, sendo ainda possível fazer a listagem com paginação
