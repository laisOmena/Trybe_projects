function repeteInt(numbers) {
    let repete = 0;
    for (let i = 0; i < numbers.length; i++) {
        let cont = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                cont += 1;                
            }
            
        }
        if (cont > repete) {
            repete = cont;
        }
        
    }
    return repete;
}

console.log(repeteInt([2, 3, 2, 5, 8, 2, 3]));