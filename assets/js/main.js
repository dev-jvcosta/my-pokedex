/* REALIZAR O END-POINT FAZER A REQUISIÇÃO  DA API */

// offset e limit foram criadas para controle dinâmino da páginação.


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
const listaItems = []
//ESTRUTURA DE INTERFACE DE UM FETCH


pokeApi.getPokemon().then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listaItems.push(convertPokemonToLi(pokemon));
      }
      console.log(listaItems);
})

