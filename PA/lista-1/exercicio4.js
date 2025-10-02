let input = require('readline-sync');

let n1 = input.questionInt('Digite seu numero N1:')
let n2 = input.questionInt('Digite seu numero N2:')
n1 = n1 + 10
n2 = n2 / 2
console.log("Seu N1 é:", n1)
console.log("Seu N2 é:", n2)
console.log(`O Resultado do N1: ${n1} e o Resultado do N2 é: ${n2}`)


