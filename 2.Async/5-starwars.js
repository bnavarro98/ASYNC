const personajeId = 1; // Podemos cambiar el número para que nos cambie el personaje
const urlApiStarWars = 'https://swapi.dev/api/';

// Obtener información del personaje
fetch(`${urlApiStarWars}people/${personajeId}/`)
  .then(response => response.json())
  .then(characterData => {
    console.log(`Nombre del personaje: ${characterData.name}`);
    console.log('Películas en las que aparece:');

    const filmPromises = characterData.films.map(filmUrl => fetch(filmUrl));
    Promise.all(filmPromises)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(films => {
        films.forEach((film, index) => {
          console.log(`${index + 1}. ${film.title}`);
        });
      })
      .catch(error => {
        console.error('Error al obtener información de películas:', error);
      });
  })
  .catch(error => {
    console.error('Error al obtener información del personaje:', error);
  });
