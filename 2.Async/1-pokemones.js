// URL base de la PokeAPI
const urlPokemonAPI = 'https://pokeapi.co/api/v2/';

// Número de Pokémones que queremos obtener
const totalPokemon = 20;

// Realizar peticiones para obtener información de los Pokémon
for (let i = 1; i <= totalPokemon; i++) {
  const pokemonUrl = `${urlPokemonAPI}pokemon/${i}`;

  fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
      const pokemonName = data.name;
      const pokemonTypes = data.types.map(type => type.type.name).join(', ');

      console.log(`${pokemonName}: ${pokemonTypes}`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
