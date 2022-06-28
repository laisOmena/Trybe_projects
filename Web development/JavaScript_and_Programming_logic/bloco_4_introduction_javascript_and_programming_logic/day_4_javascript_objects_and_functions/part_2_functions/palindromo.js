function palindromo(word) {
    let wordFront = word;
    let wordBack = word.split('').reverse().join('');
    console.log(wordFront, wordBack);
    if(wordFront === wordBack){
        return true;
    }else {
        return false;
    }
    
}

console.log(palindromo('arara'));