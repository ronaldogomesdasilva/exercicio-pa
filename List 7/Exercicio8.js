const pessoas = [
  { nome: "Lucas", idade: 17 },
  { nome: "Ana", idade: 22 },
  { nome: "João", idade: 15 },
  { nome: "Maria", idade: 30 }
];

function filtrarMaiores(pessoas) {
  return pessoas.filter(pessoa => pessoa.idade > 18);
}

console.log(filtrarMaiores(pessoas));
