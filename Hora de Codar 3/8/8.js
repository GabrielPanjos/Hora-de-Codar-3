var inicial = 1
var final = parseInt(prompt("Digite um número"))

var lista = []

while (final <= 0) {
    var final = parseInt(prompt("Erro. Digite um número maior que zero"))
}

var soma = 0

while(inicial <= final) {
    soma = inicial
    inicial++
    lista.push(soma)
}

document.write(lista.join(", "))
