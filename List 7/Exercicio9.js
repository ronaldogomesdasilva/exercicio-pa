const conta = {
  agencia: "0001",
  numero: "12345-6",
  senha: "1234",
  saldo: 500,
  historico: []
};

function validarAcesso(ag, num, senha) {
  return (conta.agencia === ag && conta.numero === num && conta.senha === senha);
}

function verSaldo() {
  return conta.saldo;
}

function sacar(valor) {
  if (valor > conta.saldo) {
    return "Saldo insuficiente.";
  }

  if (valor % 10 !== 0) {
    return "Valor inválido. Utilize múltiplos de 10.";
  }

  conta.saldo -= valor;
  conta.historico.push(`Saque de R$${valor}`);

  let notas = {};

  let valores = [100, 50, 20, 10];
  for (let nota of valores) {
    notas[nota] = Math.floor(valor / nota);
    valor %= nota;
  }

  return notas;
}

// Exemplo:
if (validarAcesso("0001", "12345-6", "1234")) {
  console.log("Saldo:", verSaldo());
  console.log("Notas entregues:", sacar(280));
  console.log("Novo saldo:", verSaldo());
}
