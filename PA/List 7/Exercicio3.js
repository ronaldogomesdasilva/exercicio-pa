function calcularMedia(notas) {
  let soma = 0;

  for (let nota of notas) {
    soma += nota;
  }

  return soma / notas.length;
}

console.log(calcularMedia([8, 7, 9, 6]));
