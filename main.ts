function Crea_llistes () {
    disponibles = [A1, A2, A3]
    ocupats = []
}
function Assigna_encarregat () {
    encarregat = disponibles[randint(0, disponibles.length - 1)]
    basic.showString("" + (encarregat))
    ocupats.push(encarregat)
    item = disponibles.indexOf(encarregat)
    eraser = disponibles.removeAt(item)
}
input.onButtonPressed(Button.A, function () {
    if (disponibles.length > 0) {
        Assigna_encarregat()
        if (disponibles.length == 0) {
            Crea_llistes()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(ocupats.length)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(disponibles.length)
})
let eraser = ""
let item = 0
let encarregat = ""
let ocupats: string[] = []
let disponibles: string[] = []
let A3 = ""
let A2 = ""
let A1 = ""
A1 = "Pau"
A2 = "Laia"
A3 = "Toni"
Crea_llistes()
basic.forever(function () {
	
})
