let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")

console.log("---Resposta---")
n1 = n1 - 10

if (n1 > 3){ console.log("O resultado é ",n1, " e ele é maior que 3 😊");}

else {console.log("O resultado é igual ou menor que 3 😢. Digite outro número. ");}