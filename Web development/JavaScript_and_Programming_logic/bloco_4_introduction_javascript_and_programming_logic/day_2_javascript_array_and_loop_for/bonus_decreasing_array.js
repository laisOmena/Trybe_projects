/* Ordene o array numbers em ordem decrescente e imprima seus valores; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i += 1){
    for (let j = 0; j < i; j += 1){
        if (numbers[i] > numbers[j]){//condição para descobrir se o primeiro número é maior que o segundo.
            let position = numbers[j];//Sendo maior ele vai guardar a posição do segundo
            numbers[j] = numbers[i];//O segundo número vai receber o primeiro
            numbers[i] = position;//O primeiro vai receber o segundo que foi armazenado
        }
    }
}

console.log(numbers);