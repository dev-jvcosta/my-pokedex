/* REALIZAR O END-POINT FAZER A REQUISIÇÃO  DA API */

// offset e limit foram criadas para controle dinâmino da páginação.
const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


//ESTRUTURA DE INTERFACE DE UM FETCH

// validando o sucesso da requisição
fetch(url)
    .then((response) => {

        // retorna um objeto response Body convertido em json 
        return response.json();
    })
    .then((jsonBody) => {

        // recebe o jsonBody do promise anterior e exibe no console
        console.log(jsonBody);
    })
    .catch((error) => {

        // o .catch prmite verificar se a requisição falhou ao devolver a resposta.
        console.log('Erro na requisição');
        console.error(error);})

    .finally(()=>{
        
        // finaliza a requisição independente do sucesso ou fracasso anterior;
        console.log('Requisição concluída');
    });

console.log(`Será executado aqui primeiro `);