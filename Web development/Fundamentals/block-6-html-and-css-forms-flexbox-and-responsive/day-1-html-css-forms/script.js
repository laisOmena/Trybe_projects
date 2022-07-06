let btnEnviar = document.getElementById('input-enviar');

function getElement(event) {
    event.preventDefault();
    let element = btnEnviar.value;
    return element;
}

btnEnviar.addEventListener('click', getElement);