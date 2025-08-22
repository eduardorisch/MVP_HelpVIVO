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

 document.getElementById("formQ2").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ2")).hide();
});

 document.getElementById("formQ3").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ3")).hide();
});

 document.getElementById("formQ4").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ4")).hide();
});

 document.getElementById("formQ5").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ5")).hide();
});

 document.getElementById("formQ6").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ6")).hide();
});

 document.getElementById("formQ7").addEventListener("submit", function(e) {
    e.preventDefault();
    atualizarBarra();
    bootstrap.Modal.getInstance(document.getElementById("modalQ7")).hide();
});