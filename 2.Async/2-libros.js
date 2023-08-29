function peticionLibro(libro) {
    const urlLibros = 'http://openlibrary.org/search.json?q=';
    const formattedQuery = libro.replace(/\s+/g, '+'); // Reemplazar espacios con '+'
  
    const buscarUrl = `${urlLibros}${formattedQuery}`;
  
    fetch(buscarUrl)
      .then(response => response.json())
      .then(data => {
        const docs = data.docs;
        if (docs.length > 0) {
          const firstBook = docs[0];
          const authors = firstBook.author_name || [];
  
          if (authors.length > 0) {
            console.log(`Autores del libro "${libro}": ${authors.join(', ')}`);
          } else {
            console.log(`No se encontraron autores para el libro "${libro}"`);
          }
        } else {
          console.log(`No se encontraron resultados para el libro "${libro}"`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Ejemplo de uso
  peticionLibro("gringo viejo");
  