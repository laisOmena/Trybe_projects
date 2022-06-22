/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        impares.push(numbers[i]);
    }
}

if (impares.length == 0) {
    console.log('Nenhum valor ímpar encontrado.');    
}

console.log(impares);