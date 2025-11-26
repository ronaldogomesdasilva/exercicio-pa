const aluno = {
  nome: "Ronaldo",
  idade: 18,
  curso: "Desenvolvimento de Sistemas"
};

function apresentarAluno(aluno) {
  return `O aluno ${aluno.nome} tem ${aluno.idade} anos e cursa ${aluno.curso}.`;
}

console.log(apresentarAluno(aluno));
