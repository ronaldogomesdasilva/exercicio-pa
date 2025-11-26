function contarOcorrencias(array) {
  const contagem = {};

  for (let item of array) {
    contagem[item] = (contagem[item] || 0) + 1;
  }

  return contagem;
}

console.log(contarOcorrencias(['a', 'b', 'a', 'c', 'b', 'a']));
