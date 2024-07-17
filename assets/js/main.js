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

const pokemonList = document.getElementById(`pokemonList`); //captura do html pelo id o elemento de lista
const listaItems = [];

/*
  O código abaixo basicamente pega a lista de pokemons, realiza um map passando a referencia da função convertPokemonToLi() como parametro
  e em seguido, o resultado retornado realiza o um join com espaço em branco entre eles.
*/
pokeApi.getPokemon().then((pokemons) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join(``);
})

