var inicio = 15
var fim = 100

var soma = 0
var quantidade = 0

while (inicio <= fim) {
    soma = soma + inicio
    quantidade++
    inicio++
}

var media = soma / quantidade

document.write("A média aritmetica dos números entre 15 e 100, é: " + media)