let progresso = 0;

function aumentarProgresso() {
    progresso = Math.min(100, progresso + 15);
}

function atualizarBarra() {
    aumentarProgresso();
    document.getElementById("progress-bar").style.width = progresso + "%";
    document.getElementById("progress-bar").setAttribute("aria-valuenow", progresso);
    document.getElementById("progress-text").textContent = progresso + "%";
}

 document.getElementById("formQ1").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ1")).hide();
});