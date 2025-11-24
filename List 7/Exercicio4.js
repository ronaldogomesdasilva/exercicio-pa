const nomes = ["Ana", "Carlos", "Ronaldo", "Maria"];

function buscarNome(nome) {
  return nomes.includes(nome);
}

console.log(buscarNome("Ronaldo"));