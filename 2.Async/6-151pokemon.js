const urlPokemon = 'https://pokeapi.co/api/v2/';
const urlPrimerGneracion = 'pokemon?limit=151';

// Obtener lista de Pokémon de la primera generación
fetch(`${urlPokemon}${urlPrimerGneracion}`)
  .then(response => response.json())
  .then(data => {
    const pokemonList = data.results;
    const pokemonDetailsPromises = pokemonList.map(pokemon => fetch(pokemon.url).then(response => response.json()));

    Promise.all(pokemonDetailsPromises)
      .then(pokemonDetails => {
        const pokemonInfo = pokemonDetails.map(details => ({
          name: details.name,
          moves: details.moves.map(move => move.move.name),
          types: details.types.map(type => type.type.name),
          height: details.height,
          weight: details.weight,
        }));

        console.log(pokemonInfo);
      })
      .catch(error => {
        console.error('Error al obtener detalles de Pokémon:', error);
      });
  })
  .catch(error => {
    console.error('Error al obtener lista de Pokémon:', error);
  });
