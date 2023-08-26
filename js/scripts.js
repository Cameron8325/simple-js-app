let pokemonRepository = (function() {
  let repository = []

  pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      types: ["grass", "poison"]
  },

    {
      name: 'Charmander',
      height: 0.6,
      types: ["fire"]
  },

    {
      name: 'Squirtle',
      height: 0.5,
      types: ["water"]
  },
    {
      name: 'Caterpie',
      height: 0.3,
      type: ["bug"]
    },
    {
      name: 'Charizard',
      height: 1.7,
      type: ["fire", "flying"]
    }
  ];

  function getALL() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon)
  }

  return {
    getALL: getALL,
    add: add,
    addListItem: addListItem
  };
  })();

pokemonRepository.getALL().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});