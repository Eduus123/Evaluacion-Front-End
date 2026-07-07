let contador = 15;
const Valor_Inicial = 15;

const btn = document.getElementById('btnPresioname');
const contadorSpan = document.getElementById('contador');
const card = document.getElementById('miCard');
const cardTitulo = document.getElementById('cardTitulo');
const cardDescripcion = document.getElementById('cardDescripcion');
const cardImg = document.getElementById('cardImg');
const cardFooter = document.getElementById('cardFooter');

function actualizarEstado() {
    contadorSpan.textContent = contador;
    cardFooter.textContent = contador;

    btn.classList.remove('btn-primary', 'btn-warning', 'btn-danger');
    card.classList.remove('bg-primary', 'bg-warning', 'bg-danger');

    if (contador >= 11) {
        btn.classList.add('btn-primary');
        card.classList.add('bg-primary');
        cardTitulo.textContent = "Estado óptimo";
        cardDescripcion.textContent = "Todo funciona con normalidad.";
        cardImg.src = "img/estado-normal.png";
    } else if (contador >= 6) {
        btn.classList.add('btn-warning');
        card.classList.add('bg-warning');
        cardTitulo.textContent = "Precaución";
        cardDescripcion.textContent = "El sistema requiere atención pronto.";
        cardImg.src = "img/estado-warning.png";
    } else if (contador >= 1) {
        btn.classList.add('btn-danger');
        card.classList.add('bg-danger');
        cardTitulo.textContent = "Estado crítico";
        cardDescripcion.textContent = "Intervención inmediata requerida.";
        cardImg.src = "img/estado-danger.png";
    }
}

btn.addEventListener('click', function () {
    contador--;

    if (contador <= 0) {
        contador = Valor_Inicial;
    }

    actualizarEstado();
});

actualizarEstado();
