const produtos = [
  { nome: "Caderno", preco: 25 },
  { nome: "Fone de ouvido", preco: 120 },
  { nome: "Teclado", preco: 80 },
  { nome: "Caneta", preco: 5 }
];

function filtrarProdutos(produtos) {
  return produtos.filter(produto => produto.preco > 50);
}

console.log(filtrarProdutos(produtos));
