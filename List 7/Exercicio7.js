const carrinho = [
  { nome: "Camisa", quantidade: 2, preco: 50 },
  { nome: "Calça", quantidade: 1, preco: 120 },
  { nome: "Tênis", quantidade: 1, preco: 200 }
];

function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => {
    return total + item.quantidade * item.preco;
  }, 0);
}

console.log("Total: R$", calcularTotal(carrinho));
