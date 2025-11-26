const livros = [
  { titulo: "Livro A", autor: "Autor A", ano: 2005 },
  { titulo: "Livro B", autor: "Autor B", ano: 2015 },
  { titulo: "Livro C", autor: "Autor C", ano: 2020 }
];

function filtrarLivros(livros) {
  return livros.filter(livro => livro.ano > 2010);
}

console.log(filtrarLivros(livros));
