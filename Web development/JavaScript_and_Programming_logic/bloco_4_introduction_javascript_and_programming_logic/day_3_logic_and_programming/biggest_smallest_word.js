let array = ['java', 'javascript', 'python', 'html', 'css'];

let contBig = 0;
let contSmall = 0;
let bigWord = '';
let smallWord = array[0];

for (let i = 0; i < array.length; i += 1) {
    for (let letter of array[i]) {
        contBig += 1;
        contSmall += 1;
    }
    if (bigWord.length < contBig) {
        bigWord = array[i];
    }
    if (smallWord.length > contSmall) {
        smallWord = array[i];        
    }
    contBig = 0;
    contSmall = 0;
    
}

console.log(bigWord);
console.log(smallWord);