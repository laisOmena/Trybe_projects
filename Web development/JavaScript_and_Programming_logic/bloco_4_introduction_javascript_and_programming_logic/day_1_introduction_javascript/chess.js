/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas 
(lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let piece = 'Rei';
piece = piece.toLowerCase();

if(piece === 'rei'){
    console.log('Lados, frente, trás e diagonal. Uma casa por vez!');
} else if (piece === 'rainha') {
    console.log('Lados, frente, trás e diagonal.');
} else if (piece === 'bispo') {
    console.log('Diagonal.');    
} else if (piece === 'cavalo') {
    console.log('Em L.');
} else if (piece === 'torre') {
    console.log('Lados, frente e trás.');
} else if (piece === 'peão') {
    console.log('Frente.');
}