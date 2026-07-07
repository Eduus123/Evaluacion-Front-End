const usuariotest = "admin";
const passwordtest = "1234";

const btnLogin = document.getElementById('btnLogin');
const alertContainer = document.getElementById('alertContainer');
const logo = document.getElementById('logo');

btnLogin.addEventListener('click', function () {
    const inputUsuario = document.getElementById('inputUsername').value.trim();
    const inputPassword = document.getElementById('inputPassword').value.trim();

    alertContainer.innerHTML = ''; 

    if (inputUsuario === '' || inputPassword === '') {
        mostrarAlerta('El campo o los campos están vacíos.', 'warning');
        return;
    }

    if (inputUsuario === usuariotest && inputPassword === passwordtest) {
        window.location.href = "dashboard.html";
    } else {
        mostrarAlerta('Hubo un error en la autentificación.', 'danger');
        logo.setAttribute('src', 'img/logo-error.png');
    }
});

function mostrarAlerta(mensaje, tipo) {
    alertContainer.innerHTML = `
        <div class="alert alert-${tipo}" role="alert">
            ${mensaje}
        </div>`;
}

const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');

function Enter(evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        btnLogin.click();
    }
}

inputUsername.addEventListener('keydown', Enter);
inputPassword.addEventListener('keydown', Enter);
