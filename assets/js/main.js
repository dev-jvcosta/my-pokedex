/* REALIZAR O END-POINT FAZER A REQUISIÇÃO  DA API */

// offset e limit foram criadas para controle dinâmino da páginação.
const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// recebe um pokemon e retorna uma li com os dados do pokemon no layout definido.
function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
    <span class="number">#001 </span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">

      <ol class="types">
        <li class="type">Grass</li>
        <li class="type">Poison</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="${pokemon.name}">
    </div>
  </li>`
}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3950895211.
const pokemonList = document.getElementById(`pokemonList`); //captura do html pelo id o elemento de lista

//ESTRUTURA DE INTERFACE DE UM FETCH

// Fazendo a Requisição para a API
fetch(url)
    .then((response) => response.json()) // converte a promise recebida em json
    .then((jsonBody) => jsonBody.results) // consome da estrutura Objeto results os pokemons
    // pokemons aqui é a referencia de results acima
    .then((pokemons)=>{
        // percorre a lista de pokemons capturando cada um enquanto ainda tiver pokemons na lista
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            // chama função convertPokemonToLi(pokemon) para converte a estrutura em do html pronta e aproveitar o layout
            pokemonList.innerHTML += convertPokemonToLi(pokemon);
        }
    })
    .catch((error) => console.log(error));


