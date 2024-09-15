var um = 1
var x = 0

var n = document.getElementById("N")
var enviar = document.getElementById("submit")

form.addEventListener("submit", function (event) {
    event.preventDefault()


    while (um <= n.value) {
        document.write("<h1> Tabuada do " + um + "</h1>")
        while (x <= 10) {

            document.write(um + " x " + x + " = " + (um * x) + "<br>")
            x++
        }
        document.write("<br>")
        um++
        x = 0

    }
})