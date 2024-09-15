var inicio = 10
var fim = 0

var mensagem = document.getElementById("contagem")

var intervalo = setInterval(function(){
    mensagem.innerHTML = (inicio)
    inicio--

    if (inicio == 0) {
        clearInterval(intervalo)
        mensagem.innerHTML = ("1")
    }
}, 1000);