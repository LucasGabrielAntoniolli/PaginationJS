let posiAtual = 1;

if (localStorage.getItem('posicao')) {
    posiAtual = localStorage.getItem('posicao');
}

function validacao () {
    if (localStorage.getItem('posicao') != posiAtual) {
        localStorage.setItem('posicao', JSON.stringify(posiAtual))
    }

    for (let i = 1; i < 4; i++) {
        if (i != posiAtual) {
            let element = document.getElementById(`${i}`);
            element.setAttribute('style', 'background-color: rgb(216, 216, 216); color: rgb(0, 81, 255);');
            let main = document.getElementById('main'+`${i}`);
            main.setAttribute('style', 'display: none;');
        }
        if (i == posiAtual) {
            let element = document.getElementById(`${i}`);
            element.setAttribute('style', 'background-color: rgb(0, 81, 255); color: rgb(216, 216, 216);');
            let main = document.getElementById('main'+`${i}`);
            main.setAttribute('style', 'display: flex;');
        }
    }
}
validacao();

function left () {
    if (posiAtual > 1) {
        posiAtual--;
    } else {
        posiAtual = 3;
    }
    validacao();
}

function right () {
    if (posiAtual < 3) {
        posiAtual++;
    } else {
        posiAtual = 1;
    }
    validacao();
}

function um () {
    if (posiAtual != 1) {
        posiAtual = 1;
        validacao();
    }
}

function dois () {
    if (posiAtual != 2) {
        posiAtual = 2;
        validacao();
    }
}

function tres () {
    if (posiAtual != 3) {
        posiAtual = 3;
        validacao();
    }
}