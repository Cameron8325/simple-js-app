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
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', function () {
      showDetails(pokemon)
    });
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
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
        console.log(pokemon)
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
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let modal = document.querySelector("#pokemon-modal");
      let modalName = document.querySelector("#modal-pokemon-name");
      let modalHeight = document.querySelector("#modal-pokemon-height");
      let modalImage = document.querySelector("#modal-pokemon-image");
      let closeModalButton = document.querySelector(".close");

      modalName.textContent = "Name: " + pokemon.name;
      modalHeight.textContent = pokemon.height + " decimetres";
      modalImage.src = pokemon.imageUrl;

      modal.style.display = "block";
      modalVisible = true;

      closeModalButton.addEventListener('click', function () {
        modal.style.display = "none";
        modalVisible = false;
      });

      // Close the modal when clicking outside of it
      document.addEventListener('click', function (event) {
        if (modalVisible && event.target === modal) {
          modal.style.display = "none";
          modalVisible = false;
        }
      });

      // Close the modal when pressing the "Esc" key
      document.addEventListener('keydown', function (event) {
        if (modalVisible && event.key === "Escape") {
          modal.style.display = "none";
          modalVisible = false;
        }
      });
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});