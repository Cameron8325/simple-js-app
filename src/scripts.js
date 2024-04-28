let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1281';

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    listPokemon.classList.add("list-group-item");
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    button.classList.add("btn-primary", "btn-lg");
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon)
    }); 
  }

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    // clear existing content of the modal
    modalTitle.empty();
    modalBody.empty();

    // creating element for name in modal content
    let nameElement = $('<h5 class="modal-title">' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + '</h5>');
    let imageElement = $('<img class="modal-img">');
      imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + ' Decimeters' + '</p>');
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + ' Decagrams' + '</p>');
     // Capitalize the first letter of each type
     let typesCapitalized = pokemon.types.map(function(type) {
      return type.charAt(0).toUpperCase() + type.slice(1);
  });
  let typesElement = $('<p>' + 'Types: ' + typesCapitalized.join(', ') + '</p>');

  // Capitalize the first letter of each ability
  let abilitiesCapitalized = pokemon.abilities.map(function(ability) {
      return ability.charAt(0).toUpperCase() + ability.slice(1);
  });
  let abilitiesElement = $('<p>' + 'Abilities: ' + abilitiesCapitalized.join(', ') + '</p>');


    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
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

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types.map(function (type) {
        return type.type.name;
      });
      item.abilities = details.abilities.map(function (ability) {
        return ability.ability.name;
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon)
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});