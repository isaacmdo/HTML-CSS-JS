var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var aluno = obtemPacienteDoFormulario(form);

    var alunoTr = montaTr(aluno);

    var erros = validaAluno(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

var idDisciplina = document.querySelector("#id-Disciplina");

function obtemPacienteDoFormulario(form) {

    var aluno = {
        disciplina: idDisciplina.value,
        nome: form.nome.value,
        prova1: form.prova1.value,
        prova2: form.prova2.value,
        exame: form.exame.value,
        media: calculaMedia(form.prova1.value, form.prova2.value, form.exame.value),
        faltas: form.faltas.value
    }

    if(aluno.disciplina == "I"){
        aluno.disciplina = "Introdução à informática"
    } else if(aluno.disciplina == "P"){
        aluno.disciplina = "Linguagens de Programação"
    } else {
        aluno.disciplina = "Programação de Computadores"
    }

    return aluno;
}


function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("alunos");

    alunoTr.appendChild(montaTd(aluno.disciplina, "info-disciplina"));
    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.prova1, "info-prova1"));
    alunoTr.appendChild(montaTd(aluno.prova2, "info-prova2"));
    alunoTr.appendChild(montaTd(aluno.exame, "info-exame"));
    alunoTr.appendChild(montaTd(aluno.media, "info-media"));
    alunoTr.appendChild(montaTd(aluno.faltas, "info-faltas"));

    return alunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAluno(aluno) {

    var erros = [];

    if (aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.exame.length == 0) {
        erros.push("A exame não pode ser em branco");
    }

    if (aluno.prova1.length == 0) {
        erros.push("A prova 1 não pode ser em branco");
    }

    if (aluno.prova2.length == 0) {
        erros.push("A prova 2 não pode ser em branco");
    }

    if (!validacaoP1(aluno.prova1)) {
        erros.push("Prova 1 é inválido");
    }

    if (!validacaoP2(aluno.prova2)) {
        erros.push("Prova 2 é inválida");
    }

    if (!validacaoExame(aluno.exame)) {
        erros.push("Exame é inválida");
    }

    if (!validacaoFaltas(aluno.faltas)) {
        erros.push("Faltas sao inválidas");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
