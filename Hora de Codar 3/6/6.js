var nome_do_aluno = document.getElementById("nome_do_aluno")
var primeira_nota = document.getElementById("primeira_nota")
var segunda_nota = document.getElementById("segunda_nota")
var submit = document.getElementById("submit")
var form = document.getElementById("form")
var div_media = document.getElementById("media")
var div_aprovacao = document.getElementById("aprovacao")
var aluno_aprovado = 0

form.addEventListener("submit", function (event) {
    event.preventDefault()

    var aluno = nome_do_aluno.value
    var nota1 = parseFloat(primeira_nota.value)
    var nota2 = parseFloat(segunda_nota.value)
    var media = ((nota1 + nota2) / 2)

    

    if (aluno === "") {
        alert("Digite um nome.")
    } else if (nota1 < 0 || nota1 > 10) {
        alert("Nota inválida. Digite outra.")
    } else if (nota2 < 0 || nota2 > 10) {
        alert("Nota inválida. Digite outra.")
    } else {
        div_media.innerHTML = "A média do aluno " + aluno + " é " + media + "."
        if (media >= 9.5) {
            div_aprovacao.innerHTML = "O aluno foi Aprovado!"
            aluno_aprovado++
        } else {
            div_aprovacao.innerHTML = "O aluno foi Reprovado!"
        }

        var continuar = prompt("Calcular a média de outro aluno? Sim/Não")

        while (continuar !== "Sim" && continuar !== "sim" && continuar !== "S" && continuar !== "s" && continuar !== "Não" && continuar !== "não" && continuar !== "N" && continuar !== "n" && continuar !== "Nao" && continuar !== "nao") {
            continuar = prompt("Erro. Você deseja calcular a média de outro aluno? Sim/Não")
        }

        if (continuar == "Sim" || continuar == "sim" || continuar == "S" || continuar == "s") {
            nome_do_aluno.value = ""
            primeira_nota.value = ""
            segunda_nota.value = ""

        } else if (continuar == "Não" || continuar == "não" || continuar == "N" || continuar == "n" || continuar == "Nao" || continuar == "nao") {
            nome_do_aluno.value = ""
            primeira_nota.value = ""
            segunda_nota.value = ""
            div_media.innerHTML = ""
            div_aprovacao.innerHTML = "A quantidade de alunos aprovados foram " + aluno_aprovado
        }
    }
}

)

