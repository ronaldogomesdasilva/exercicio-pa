const pessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 22 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 30 }
];

function maioresDeIdade(lista) {
  return lista.filter(pessoa => pessoa.idade > 18);
}

console.log(maioresDeIdade(pessoas));