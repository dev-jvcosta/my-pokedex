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
- `GET`: recuperar um elemento - 'Pegar'

Em toda requisição de um recurso o método informa o que será feito com esse recurso.

1. Primeira Area de identificação: PATH que já retorna o recurso.

2. QueryString: Descrição de busca. 
     
     Sintaxe: Todo elemento que vem após o simbolo `?` dentro do ip, definido sempre por chave:valor

     O caracter `&` representa a concatenação de argumentos dentro da QueryString.
     
     ex.: https://pokeapi.co/api/v2/pokemon/`?type=grass&name=i`

     Args.:
     `type: grass`
     `name: i`

     ---

     ex2.: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=2`

     Args,:

     `offset = 0` -> Deslocamento 0
     `limit: 2` -> quantidade a ser retornada (retorna dois pokemons 1 e 2)

     `offset = 4` -> deslocamento 4
     `limit: 2` -> retorna 2 pokemons entre 3 e 4

     Ou seha chama-se paginação


