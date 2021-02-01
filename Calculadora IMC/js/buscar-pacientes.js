var botaoAdicionar = document.querySelector("#busca-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")
        erroAjax.classList.add("invisivel")
        if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach( function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    }else{
        erroAjax.classList.remove("invisivel");
    }
    });

    xhr.send();
});