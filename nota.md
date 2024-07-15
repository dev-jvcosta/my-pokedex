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
     - ex.: `Cookie: session_`

# Body e Status

## Request Body

Em uma requisição HTTP, o Body (corpo) é onde enviamos informações adicionais para o servidor, como dados de um formulário, conteúdo de um arquivo ou um objeto JSON.

 Pense nele como o "recheio" da sua mensagem. Ele é opcional em alguns métodos HTTP (como GET), mas essencial em outros (como POST e PUT).

 ex.:

 Imagine que você está preenchendo um formulário de cadastro em um site. As informações que você digita nos campos (nome, email, senha) são enviadas no Body da requisição para o servidor processar.

 ```json
 /*
     Rquest Headers
     content-type: application/json
*/

 Body
 {
     "name":"Test"
 }
 ```
## Status Code

O Status Code **(código de status)** é uma resposta numérica que o servidor envia de volta ao cliente após receber uma requisição. Ele indica se a requisição foi bem-sucedida, se houve algum erro ou se é necessária alguma ação adicional.

### Categorias de Status Code
- **1xx: Informações**:
     - A requisição foi bem recebida e está sendo processado.

- **2xx: Sucesso**:
     - A requisição foi bem recebida e processada com sucesso.

- **3xx: Redirecionamento**:
     - O cliente precisa realizar uma ação adicional para completar a requisição.

- **4xx: Erro do Cliente**:
     - A requisição contém algum erro ou não pôde ser processada (normalmente por parte do cliente).

- **5xx: Erro do Servidor**:
     - O servidor encontrou um erro ao processar a requisição.


# Promise, Response, fetch(), catch() e finally

### 1. O que é uma Promise (Promessa)?

Imagine que você pediu uma pizza. A pizzaria te promete que vai entregar, entretanto não na mesma hora. Você recebe um "papelzinho" (a Promise) que representa essa promessa. Com este papelzinho, você pode:

- **Esperar a pizza chegar `(then)`**: Quando a pizza estiver pronta, você a recebe e pode saboreá-la.

- **Se prepara para problemas `(catch)`**: Se algo der errado (a pizzaria esqueceu o refrigerante, o entregador se atrasou), você tem um plano B.

- **Limpar a mesa `(finally)`**: Independete se a pizza chegou ou não, você vai querer limpar a mesa depois, certo?

Em JavaScript, uma **Promise** funciona da mesma forma. Ela representa a promessa de que uma operação (como uma requisição para um servidor) será concluída no futuro.

### 2. O que é Response (Resposta)?

**Continuando** com a analogia da pizza, a **Response** é a pizza que chega na sua casa. Ela contém tudo o que você pediu _(os dados que você solicitou ao servidor)_ e algumas informações extras, como o status da entrega _(se deu tudo certo, se houve algum problema.)_ 

### 3. O que é `fetch()` e como usá-lo?

`fetch()` é a função que você usa para "pedir a pizza" _(fazer uma requisição a um servidor)_. Você passa a **URL** do recurso que deseja _(por exemplo: "https://pokeapi.co/api/v2/pokemon/")_ e o `fetch()` retorna uma Promise.

 ex.:
```javascript
fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => {
// A "pizza" (resposta) chegou!
// Vamos verificar se deu tudo certo:
if (!response.ok) {
     throw new Error('Algo deu errado na requisição!');
}
// Se deu certo, vamos "comer a pizza" (extrair os dados):
return response.json(); // Converte a resposta para JSON
})
.then(dados => {
// Agora temos os dados em formato JSON
}
```