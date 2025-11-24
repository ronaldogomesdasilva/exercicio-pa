const conta = {
  agencia: "0001",
  numero: "12345-6",
  senha: "1234",
  saldo: 1000,
  historico: []
};

function validarAcesso(agencia, numero, senha) {
  return (
    agencia === conta.agencia &&
    numero === conta.numero &&
    senha === conta.senha
  );
}

function exibirSaldo() {
  return `Saldo atual: R$ ${conta.saldo}`;
}

function realizarSaque(valor) {
  if (valor > conta.saldo) {
    return "Saldo insuficiente!";
  }

  const notas = [100, 50, 20, 10];
  let restante = valor;
  let cedulas = {};

  for (let nota of notas) {
    let quantidade = Math.floor(restante / nota);
    if (quantidade > 0) {
      cedulas[nota] = quantidade;
      restante -= quantidade * nota;
    }
  }

  conta.saldo -= valor;
  conta.historico.push({ tipo: "saque", valor });

  return {
    mensagem: "Saque realizado com sucesso!",
    cedulas,
    saldoAtual: conta.saldo
  };
}

// Exemplo de uso
if (validarAcesso("0001", "12345-6", "1234")) {
  console.log(exibirSaldo());
  console.log(realizarSaque(380));
}