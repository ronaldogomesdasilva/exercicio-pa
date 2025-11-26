const nomes = ["Ana", "Carlos", "Ronaldo", "Maria"];

function verificarNome(nome) {
  return nomes.includes(nome) ? "Nome encontrado" : "Nome não encontrado";
}

console.log(verificarNome("Ronaldo"));
