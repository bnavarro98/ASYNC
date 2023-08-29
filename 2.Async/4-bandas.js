function obtenerGeneroDeBanda(banda) {
    const urlBanda = 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=';
    const formatoBanda = encodeURIComponent(banda);
  
    const buscarUrl = `${urlBanda}${formatoBanda}`;
  
    fetch(buscarUrl)
      .then(response => response.json())
      .then(data => {
        const artists = data.artists;
        if (artists && artists.length > 0) {
          const firstArtist = artists[0];
          const genre = firstArtist.strGenre;
  
          if (genre) {
            console.log(`El género de ${banda} es: ${genre}`);
          } else {
            console.log(`No se encontró información de género para ${banda}`);
          }
        } else {
          console.log(`No se encontró información para la banda ${banda}`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Ejemplo de uso
  obtenerGeneroDeBanda("coldplay");
  