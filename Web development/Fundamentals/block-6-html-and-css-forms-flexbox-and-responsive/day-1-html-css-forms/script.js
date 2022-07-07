let btnEnviar = document.getElementById('input-enviar');

function getElement(event) {
    event.preventDefault();
    let element = btnEnviar.value;
    console.log('okay');
}

btnEnviar.addEventListener('click', getElement);