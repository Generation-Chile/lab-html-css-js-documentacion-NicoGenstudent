let form = document.getElementById('scroll-button');

form.addEventListener('click', function() {
    let formElement = document.getElementById('form');
    formElement.scrollIntoView({ behavior:'smooth' });
});

function presionarBoton() {
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre == '' || email == '' || mensaje == '') {
        alert('Por favor, complete todos los campos');
    return
    }

    alert('Gracias por su mensaje, revisaremos su consulta a la brevedad');
    console.log({ nombre, email, mensaje });

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
}

