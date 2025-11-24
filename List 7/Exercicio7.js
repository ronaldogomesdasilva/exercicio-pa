const carrinho = [
  { nome: "Camisa", quantidade: 2, preco: 50 },
  { nome: "Calça", quantidade: 1, preco: 120 }
];

function totalCarrinho(itens) {
  return itens.reduce((total, item) => {
    return total + item.quantidade * item.preco;
  }, 0);
}

console.log("Total: R$", totalCarrinho(carrinho));