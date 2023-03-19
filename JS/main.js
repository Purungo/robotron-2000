// Variaveis pecas/poder Robotron
const controles = document.querySelectorAll('[data-maismenos]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// Variaveis trocar cor Robotron
const robotron = document.querySelector('#robotron');
const cores = ["img/robotronAzul.png", "img/robotronAmarelo.png", "img/robotronBranco.png", "img/robotronPreto.png", "img/robotronRosa.png", "img/robotronVermelho.png"];
let cor = 0;

robotron.addEventListener("click", (evento) => {
    if (cor < (cores.length - 1)) {
        cor++;
    } else {
        cor = 0;
    }
    evento.target.src = cores[cor];
})

controles.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.maismenos, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.maismenos, evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controleF) {

    const peca = controleF.querySelector('[data-contador]');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(operacao, pecaClicada) {
    estatisticas.forEach((elemento) => {
        if (operacao === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[pecaClicada][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[pecaClicada][elemento.dataset.estatistica];
        }
    })
}


