let segundos = 0
let minutos = 0
let horas = 0
basic.forever(function () {
    basic.pause(100)
    segundos += 1
    if (segundos == 59) {
        segundos = 0
        basic.pause(100)
        minutos += 1
        if (minutos == 59) {
            minutos = 0
            basic.pause(100)
            horas += 1
            if (horas == 12) {
                horas = 0
            }
        }
    }
})
