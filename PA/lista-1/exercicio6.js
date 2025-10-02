let input = require('readline-sync');

let n1 = input.questionInt('Digite seu numero N1:')
let n2 = input.questionInt('Digite seu numero N2:')
n1 = n1 - 3
n2 = n2 + 2 
resp = (n1 + n2) - 1
console.log("O resultado é:", resp)
