let ingredientItems = [
    '500g de feijão carioquinha cozido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'Cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let ingredientList = document.querySelector('.ingredients-list');

for(let i = 0; i < ingredientItems.length; i += 1){ //Percorrendo o array ingredientItems
    let ingredient = ingredientItems[i];//Adicionando cada elemento na variável ingredient

    let ingredientListItem = document.createElement('li');//Criando o elemento li na nova variável
    ingredientListItem.innerText = ingredient;//Adicionando cada item de ingredient em texto na variavel ingredientListItem

    ingredientList.appendChild(ingredientListItem);//Inserindo a variavel ingredientListItem como filha de ingredientList
}

let ingredientListItem = document.querySelectorAll('.ingredients-list-item');

for(let i = 0; i < ingredientListItem.length; i += 1) {
    let element = ingredientListItem[i];

    if(element.innerText.includes('toucinho')) {
        ingredientList.removeChild();
    }
}