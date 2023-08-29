function peticionLibrosPorAutor(autor) {
    const urlLibros = 'http://openlibrary.org/search.json?author=';
    const formattedAuthor = autor.replace(/\s+/g, '+'); // Reemplazar espacios con '+'
  
    const searchUrl = `${urlLibros}${formattedAuthor}`;
  
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        const docs = data.docs;
        if (docs.length > 0) {
          const authorBooks = docs.map(book => book.title);
          console.log(`Libros de ${autor}:`);
          authorBooks.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`);
          });
        } else {
          console.log(`No se encontraron libros para el autor "${autor}"`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Ejemplo de uso
  peticionLibrosPorAutor("Carlos Fuentes");
  