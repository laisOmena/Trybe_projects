/* Adicione um novo livro favorito na chave livrosFavoritos, que é um array. 
Atribua a esta chave um objeto contendo as seguintes informações: */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
};

console.table(leitor.livrosFavoritos);

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length,'livros favoritos.');