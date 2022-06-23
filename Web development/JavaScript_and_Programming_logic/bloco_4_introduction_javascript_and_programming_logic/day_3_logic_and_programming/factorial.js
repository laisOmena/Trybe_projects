/* crie um algoritmo que retorne o fatorial de 10. */


let number = 5;
let numFat = 0;
let Fat = number;

if(number < 0){
    return "Erro!";
}
for (let i = 1; i < number; i++){
    Fat = Fat * i;
    numFat = Fat;
}

console.log(Fat);