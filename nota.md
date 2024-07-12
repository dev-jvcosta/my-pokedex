# Protocolo HTTP

Requisição HTTP:

Basicamente a URL (PATH) é composta por _${IP}_ / _${path}_ quando chamado, o endereço retorna o recurso solicitado.

1. Informação (URL)
     
     URL: https://pokeapi.co/api/v2/pokemon/
     _${IP}/${path}_ = caminho de identificação do recurso.

     IP: https://pokeapi.co -> https://127.0.0.1:5500
     
     PATH: /api/v2/pokemon/ (o que busco na Api na versão 2 o recurso pokemon)

2. Request Method (GET, POST, PUSH, DELETE, PATH...)
- `POST`: inserir novo elemento;
- `PUT`: atualizar um elemento existente;
- `DELETE`: removor um elemento existente;
- `GET`: recuperar um elemento ou 'Pegar'

Em toda requisição de um recurso o método informa o que será feito com esse recurso.

