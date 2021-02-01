var pacientes = document.querySelectorAll(".alunos");

var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
