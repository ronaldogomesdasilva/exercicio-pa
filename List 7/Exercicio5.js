function contarOcorrencias(array) {
  const contador = {};

  array.forEach(item => {
    contador[item] = (contador[item] || 0) + 1;
  });

  return contador;
}

console.log(contarOcorrencias(["maçã", "banana", "maçã", "laranja", "banana", "maçã"]));