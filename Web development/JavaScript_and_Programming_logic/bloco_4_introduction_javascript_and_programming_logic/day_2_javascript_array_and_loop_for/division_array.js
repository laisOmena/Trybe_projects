/* Utilizando o array criado no exercício anterior imprima o 
resultado da divisão de cada um dos elementos por 2. */

let number = 26;
let sequencia = [];

for (let i = 1; i < number; i += 1){
    sequencia.push(i);
}

let divisao = 0;
let elementosDivididos = [];
for (let i = 0; i < sequencia.length; i++) {
    divisao = sequencia[i] / 2;
    elementosDivididos.push(divisao);
}

console.log(elementosDivididos);