var numero_1 = parseInt(prompt("Digite um número: "))
var numero_2 = parseInt(prompt("Digite um segundo número que seja maior que o primeiro número: "))
const numero1 = numero_1

while(numero_1 > numero_2) {
    var numero_2 = parseInt(prompt("Digite um número menor que " + numero_1 + " :"))
}

var soma = 0
var quantidade = 0

while(numero_1 <= numero_2 ) {
    soma = soma + numero_1
    quantidade++
    numero_1++
}
var media = soma / quantidade

var div = document.getElementById("média")

div.innerHTML = "A média aritimética dos números entre " + numero1 + " e " + numero_2 + " é: " + media 