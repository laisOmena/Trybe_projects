let btnEnviar = document.getElementById('input-enviar');
let photosConsent = document.getElementById('input-checkbox2');

function getElement(event) {
    event.preventDefault();
    let element = btnEnviar.value;
    console.log(element);
}
           
function consent(){
    if (photosConsent.checked === true) {
        return validation();
    }
    return alert('Checked não selecionado.');
}

let inputName = document.getElementById('name-input');
let inputEmail = document.getElementById('email-input');
let textArea = document.getElementById('input-textarea');

function validation() {
    
    let valueInputName = inputName.value;
    let valueInputEmail = inputEmail.value;
    let valueTextArea = textArea.value;

    if ((valueInputName.length > 10) && (valueInputName.length < 40)) {
        if ((valueInputEmail.length > 10) && (valueInputEmail.length < 50)) {
            if (valueTextArea.length < 500) {
                return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
            }
        }
    }
    return alert('Dados inválidos');
    
}

btnEnviar.addEventListener('click', consent);