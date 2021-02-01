var alunos = document.querySelectorAll(".alunos");

function calculaMedia(prova1, prova2, exame) {
    var media = 0;
    n1 = parseFloat(prova1);
    n2 = parseFloat(prova2);
    n3 = parseFloat(exame);
    media = (n1 + n2 + n3) / 3
    return media.toFixed(2);
}

for (var i = 0; i < alunos.length; i++) {

    var alunos = alunos[i];

    var tdProva1 = alunos.querySelector(".info-prova1");
    var prova1 = tdProva1.textContent;

    var tdProva2 = alunos.querySelector(".info-prova2");
    var prova2 = tdProva2.textContent;

    var tdExame = alunos.querySelector(".info-exame");
    var exame = tdExame.textContent;

    var tdFaltas = alunos.querySelector(".info-faltas")
    var faltas = tdFaltas.textContent

    var tdMedia = alunos.querySelector(".info-media");

    var validaProva1 = validacaoP1(prova1);
    var validaProva2 = validacaoP2(prova2);
    var validaExame = validacaoExame(exame);
    var validaFalta = validacaoFaltas(faltas)

    if (!validaProva1) {
        console.log("prova1 inválida!");
        validaProva1 = false;
        tdProva1.textContent = "prova1 inválida";
        alunos.classList.add("alunos-invalido");
    }

    if (!validaProva2) {
        console.log("prova2 inválida!");
        validaProva2 = false;
        tdProva2.textContent = "prova2 inválida";
        alunos.classList.add("alunos-invalido");
    }

    if (!validaExame) {
        console.log("exame inválida!");
        validaExame = false;
        tdExame.textContent = "exame inválido";
        alunos.classList.add("alunos-invalido");
    }

    if (!validaFalta) {
        console.log("Falta inválida!");
        validaFalta = false;
        tdFalta.textContent = "faltas inválidas";
        alunos.classList.add("alunos-invalido");
    }


    if (validaProva1 && validaProva2 && validaExame) {
        var media = calculaMedia(prova1, prova2, exame);
        tdMedia.textContent = media;
    }
}


function validacaoP1(prova1) {

    if (prova1 >= -1 && prova1 <= 11) {
        return true;
    } else {
        return false;
    }
}

function validacaoP2(prova2) {

    if (prova2 >= -1 && prova2 <= 11) {
        return true;
    } else {
        return false;
    }
}

function validacaoExame(exame) {

    if (exame >= -1 && exame <= 11) {
        return true;
    } else {
        return false;
    }
}

function validacaoFaltas(exame) {

    if (exame >= -1 && exame <= 16) {
        return true;
    } else {
        return false;
    }
}
