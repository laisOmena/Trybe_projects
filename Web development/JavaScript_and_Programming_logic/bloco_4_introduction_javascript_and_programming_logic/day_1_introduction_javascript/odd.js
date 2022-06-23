/*  Escreva um programa que defina três números em constantes e retorne true 
se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const numbers = [1, 5, 8];

let odd = 0;
for (let i = 0; i < numbers.length; i+= 1) {
    if (numbers[i] % 2 == 0) {
        odd += 1;
    }   
}

switch (odd) {
    case 1:
        odd > 0;
        console.log(true);
        break;

    default:
        console.log(false);
        break;
}

