const pokeApi = {}

// FUNÇÃO PARA CONSUMIR OS DADOS DA API

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json()) // A response retornada é convertido para um json
}

// offset e limit foram criadas para controle dinâmino da páginação.
pokeApi.getPokemons = (offset = 0, limit = 6) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json()) // converte a promise recebida em json
        .then((jsonBody) => jsonBody.results) // consome da estrutura Objeto results os pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Mapeamento de uma lista de requisições no detalhe dos pokemons
        .then((detailRequests) => Promise.all(detailRequests)) // Aguarda o termino das requisições
        .then((pokemonsDetails) => pokemonsDetails)
}