function higher(numbers){
    let bigNumber = 0;
    for (let key of numbers) {
        if (key > bigNumber) {
            bigNumber = key;
        }        
    }
    return bigNumber;
}


console.log(higher([1, 2, 3, 4, 5]));