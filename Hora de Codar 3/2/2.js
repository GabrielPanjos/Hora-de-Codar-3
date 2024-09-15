var inicio = 30
var fim = 0

var mensagem = document.getElementById("bomba")

var intervalo = setInterval(function () {
    mensagem.innerHTML = "<h1> A bomba vai explodir em " + inicio + " segundos </h1>"
    inicio--

    if (inicio == 0) {
        clearInterval(intervalo)
        mensagem.innerHTML = "<h1> A BOMBA EXPLODIU! </h1><small>aprendi na aula que você fez a bomba :)</small"
    }
}, 1000);