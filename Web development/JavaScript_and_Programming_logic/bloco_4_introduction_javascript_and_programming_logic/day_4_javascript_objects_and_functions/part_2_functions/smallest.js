function smallest(numbers) {
    let smallNumber = 0;
    let indice;
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] < smallNumber) {
            smallNumber = numbers[i];
            indice = i;

        }        
    }

    return indice;
}

console.log(smallest([2, 4, 6, 7, 10, 0, -3]));