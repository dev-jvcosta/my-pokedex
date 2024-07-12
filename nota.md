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

# Headers

são metadados da requisição ou Ä configuração da API", sejam elas para receber ou completar uma requisição.

- **Request Headers:** o cliente(Brower) é responsavel por essa configuração ao servidor;

- **Response Headers:** o servidor é responsavel por essa configuração ao cliente.

## Cabeçalhos Gerais

- Accept: Especifica os tipos de mídia (por exemplo, text/html, application/json) que o cliente pode entender.
     - ex.: `Accept: application/json`

- Accept-Encoding: Indica a codificação de conteúdo (por exemplo, gzip, deflate) que o cliente pode lidar.
     -ex.: `Accept-Encoding: gzip, deflate``

- Accept-Language: Especifica o(s) idioma(s) preferencial(is) para a resposta.
      - ex.: `Accept-Language: pt-BR,pt;q=0.9`

- Cache-Control: Direciona o comportamento de cache (por exemplo, no-cache, max-age).
      - ex.: `Cache-Control: no-cache`

- Connection: Controla se a conexão de rede permanece aberta após a transação atual.
     - ex.: `Connection: keep-alive`

- Content-Length: Especifica o comprimento do corpo da solicitação em bytes.
     - ex.: `Content-Length: 123`

- Content-Type: Indica o tipo de mídia do corpo da solicitação.
     - ex.: `Content-Type: application/json`

- Host: Especifica o nome de domínio do servidor.
     - ex.: `Host: www.exemplo.com`

- User-Agent: Identifica o software cliente que faz a solicitação (por exemplo, navegador, bot).
     - ex.: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36`

## Cabeçalhos de Solicitação para Autorização e Autenticação

- Authorization: Carrega credenciais para autenticação (por exemplo, autenticação básica, token Bearer).
     - ex.: Authorization: Bearer seu_token_de_acesso

- Cookie: Contém cookies enviados anteriormente pelo servidor.
     - ex.: `Cookie: session_