let pokemonRepository = (function() {
  let pokemonList = []

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

  return {
    getALL: getALL,
    add: add
  };
  })();

pokemonRepository.getALL().forEach(function(pokemon){
  let pokemonUl = document.querySelector('.pokemon-list')
  let listItem = document.createElement('li')
});