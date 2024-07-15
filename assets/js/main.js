/* REALIZAR O END-POINT FAZER A REQUISIÇÃO  DA API */

// offset e limit foram criadas para controle dinâmino da páginação.
const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url).then(function(response) {
    console.log('Será executado aqui posteriomente');
    console.log(response);
})

console.log(`Será executado aqui primeiro `);