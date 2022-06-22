/* Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados. */

const num1 = 3;
const num2 = 5;
const num3 = 1;

if(num1 > num2 && num1 > num3) {
    console.log('O maior é ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('O maior é ' + num2);
} else if (num3 > num1 && num3 > num2) {
    console.log('O maior é ' + num3);
}