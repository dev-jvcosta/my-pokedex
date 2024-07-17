const pokeApi = {}

// FUNÇÃO PARA CONSUMIR OS DADOS DA API

// offset e limit foram criadas para controle dinâmino da páginação.
pokeApi.getPokemon = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json()) // converte a promise recebida em json
    .then((jsonBody) => jsonBody.results) // consome da estrutura Objeto results os pokemons
    .catch((error) => console.log(error)); // verificação de erro na requisição
}