const jogadores = [
  { nome: "Ana", pontos: 150 },
  { nome: "Carlos", pontos: 230 },
  { nome: "Ronaldo", pontos: 180 }
];

function ordenarRanking(jogadores) {
  return jogadores.sort((a, b) => b.pontos - a.pontos);
}

console.log(ordenarRanking(jogadores));
