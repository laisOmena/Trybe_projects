function higher(numbers){
    let bigNumber = 0;
    let indice;
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > bigNumber) {
            bigNumber = numbers[i];
            indice = i;

        }        
    }

    return indice;
}


console.log(higher([1, 8, 3, 4, 5]));