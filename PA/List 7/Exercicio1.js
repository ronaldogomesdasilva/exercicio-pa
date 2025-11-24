const aluno = {
  nome: "Ronaldo",
  idade: 20,
  curso: "Desenvolvimento de Sistemas"
};

function apresentarAluno(aluno) {
  return `O aluno ${aluno.nome} tem ${aluno.idade} anos e está cursando ${aluno.curso}.`;
}

console.log(apresentarAluno(aluno));