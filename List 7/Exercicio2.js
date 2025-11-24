const produtos = [
  { nome: "Mouse", preco: 40 },
  { nome: "Teclado", preco: 80 },
  { nome: "Monitor", preco: 600 },
  { nome: "Cabo USB", preco: 25 }
];

function produtosAcima50(lista) {
  return lista.filter(produto => produto.preco > 50);
}

console.log(produtosAcima50(produtos));