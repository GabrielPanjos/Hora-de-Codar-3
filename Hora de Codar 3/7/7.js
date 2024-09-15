var nota1 = parseInt(prompt("Digite a primeira nota: "))
while(nota1 < 0 || nota1 > 10) {
    var nota1 = parseInt(prompt("Número inválido. Digite a primeira nota: "))
}

var nota2 = parseInt(prompt("Digite a segunda nota: "))
while(nota2 < 0 || nota2 > 10) {
    var nota2 = parseInt(prompt("Número inválido. Digite a segunda nota: "))
}

var nota3 = parseInt(prompt("Digite a terceira nota: "))
while(nota3 < 0 || nota3 > 10) {
    var nota3 = parseInt(prompt("Número inválido. Digite a terceira nota: "))
}

var nota4 = parseInt(prompt("Digite a quarta nota: "))
while(nota4 < 0 || nota4 > 10) {
    var nota4 = parseInt(prompt("Número inválido. Digite a quarta nota: "))
}

var nota5 = parseInt(prompt("Digite a quinta nota: "))
while(nota5 < 0 || nota5 > 10) {
    var nota5 = parseInt(prompt("Número inválido. Digite a quinta nota: "))
}

var nota6 = parseInt(prompt("Digite a sexta nota: "))
while(nota6 < 0 || nota6 > 10) {
    var nota6 = parseInt(prompt("Número inválido. Digite a sexta nota: "))
}


var media = ((nota1 + nota2 + nota3 + nota4 + nota5 + nota6 ) / 6)

document.write("A média do aluno foi " + media)