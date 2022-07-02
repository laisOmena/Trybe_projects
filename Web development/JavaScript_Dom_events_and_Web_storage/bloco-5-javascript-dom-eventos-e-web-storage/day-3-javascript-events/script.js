function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
<<<<<<< HEAD

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {

    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let daysList = document.getElementById('days');

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        let day = decemberDaysList[i];

        let daysListItem = document.createElement('li');
        daysListItem.classList.add('day')
=======
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
function createDays() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.getElementById('days');
>>>>>>> main

        if ((day === 24) || (day === 25) || (day === 31)) {
            daysListItem.classList.add('holiday');
        }
        if ((day === 4) || (day === 11) || (day === 18) || (day === 25)) {
            daysListItem.classList.add('friday');
        }

        daysListItem.innerText = day;
        daysList.appendChild(daysListItem);

    }
}

createDays();
/* Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

function buttonHoliday() {

    let divButton = document.getElementsByClassName('buttons-container')[0];//Quando chamar CLASSE passe um parametro, pois você irá receber um HTMLColection. 
    let buttonHoli = document.createElement('button');
    buttonHoli.setAttribute('type', 'button');
    buttonHoli.innerText = 'Feriados';
    buttonHoli.id = 'btn-holiday';

    divButton.appendChild(buttonHoli);
}

buttonHoliday();
/* Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

function colorHoliday() {
    
    let holi = document.getElementsByClassName('holiday');
    
    for (let key in holi) {
        let buttonHoliColor = document.getElementById('btn-holiday');
        buttonHoliColor.addEventListener('click', function () {
            holi[key].style.backgroundColor = 'rgb(248,138,138)';
            buttonHoliColor.addEventListener('click', function () {
                holi[key].style.backgroundColor = 'rgb(238,238,238)';
            });    
        });
    }
}

colorHoliday();

/* Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". */

function buttonCreate(element) {
  const divButton = document.getElementsByClassName('buttons-container')[0];
  const btn = document.createElement('button');
  
  btn.innerText = element;
  btn.id = 'btn-friday';

  divButton.appendChild(btn);
}

    daysListItem.innerText = day;
    daysList.appendChild(daysListItem);
  }
}

createDays();
/* Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

function buttonHoliday() {

    let divButton = document.getElementsByClassName('buttons-container')[0];//Quando chamar CLASSE passe um parametro, pois você irá receber um HTMLColection. 
    let buttonHoli = document.createElement('button');
    buttonHoli.setAttribute('type', 'button');
    buttonHoli.innerText = 'Feriados';
    buttonHoli.id = 'btn-holiday';

    divButton.appendChild(buttonHoli);
}

buttonHoliday();
/* Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

function colorHoliday() {
    
    let holi = document.getElementsByClassName('holiday');
    
    for (let key in holi) {
        let buttonHoliColor = document.getElementById('btn-holiday');
        buttonHoliColor.addEventListener('click', function () {
            holi[key].style.backgroundColor = 'rgb(248,138,138)';
            buttonHoliColor.addEventListener('click', function () {
                holi[key].style.backgroundColor = 'rgb(238,238,238)';
            });    
        });
    }
}

colorHoliday();

/* Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". */

function buttonCreate(element) {
  const divButton = document.getElementsByClassName('buttons-container')[0];
  const btn = document.createElement('button');
  
  btn.innerText = element;
  btn.id = 'btn-friday';

  divButton.appendChild(btn);
}

buttonCreate('Sexta-feira');