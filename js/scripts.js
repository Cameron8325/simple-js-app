let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=1281'

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
    button.addEventListener('click', function () {
      showDetails(pokemon)
    });
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon)
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon.name)
  }

  return {
    getALL: getALL,
    add: add,
    addListItem: addListItem,
    loadList: loadList
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getALL().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});