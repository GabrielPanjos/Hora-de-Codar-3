const numero_1 = parseInt(prompt("Digite um número: "))
var numero_2 = parseInt(prompt("Digite um segundo número: "))

while (numero_2 <= 0) {
    var numero_2 = parseInt(prompt("Número inválido. Digite um outro segundo número: "))
}

var divisao = (numero_1 / numero_2)
document.write("A divisão dos números escolhidos é: " + divisao)