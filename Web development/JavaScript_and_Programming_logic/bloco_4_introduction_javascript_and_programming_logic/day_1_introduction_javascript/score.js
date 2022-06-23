/*Escreva um programa que converte uma nota dada em porcentagem 
(de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for 
menor que 0 ou maior que 100.*/

let score = 99;

if (100 < score || score < 0){
    console.log('Erro! Nota inválida.');
} else if (score < 50) {
    console.log('F');
} else if (60 > score && score >= 50) {
    console.log('E');
} else if (70 > score && score >= 60) {
    console.log('D');    
} else if (80 > score && score >= 70) {
    console.log('C');    
} else if (90 > score && score >= 80) {
    console.log('B');    
} else if (score >= 90) {
    console.log('A');
}