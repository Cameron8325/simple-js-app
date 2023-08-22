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
]

pokemonList.forEach(function(pokemon){
  let pokemonName = pokemonList[i].name;
  let pokemonHeight = pokemonList[i].height;
  let heightMessage = "";

  if (pokemonHeight > 1.6) {
    heightMessage = "Wow, that's so big!";
  } else if (pokemonHeight > 0.3 && pokemonHeight < 1.6) {
    heightMessage = "Average Sized Pokemon";
  } else {
    heightMessage = "Small Pokemon";
  }

  document.write(pokemonName + " (height: " + pokemonHeight + ") - " + heightMessage + "<br>");
});