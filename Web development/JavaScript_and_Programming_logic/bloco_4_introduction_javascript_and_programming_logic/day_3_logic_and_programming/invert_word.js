let word = 'tryber';

let saveWord = [];
let invertedWord = [];

for (const letter of word) {
    saveWord.push(letter);    
}

for (let i = saveWord.length -1; i >= 0 ; i-= 1) {
    invertedWord.push(saveWord[i])
    
}

console.log(invertedWord);