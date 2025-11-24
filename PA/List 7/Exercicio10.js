const jogadores = [
  { nome: "Ana", pontos: 50 },
  { nome: "Carlos", pontos: 80 },
  { nome: "Ronaldo", pontos: 100 },
  { nome: "Maria", pontos: 60 }
];

function ranking(lista) {
  return lista.sort((a, b) => b.pontos - a.pontos);
}

console.log(ranking(jogadores));
