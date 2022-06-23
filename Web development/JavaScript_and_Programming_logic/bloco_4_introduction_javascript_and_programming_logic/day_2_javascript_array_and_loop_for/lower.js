/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lower = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (lower > numbers[i]) {
        lower = numbers[i];        
    }
    
}

console.log(lower);