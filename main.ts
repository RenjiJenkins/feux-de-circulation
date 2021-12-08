function Piétons () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    Décompte = 5
    for (let index = 0; index < 3; index++) {
        basic.pause(1000)
        Décompte += -1
    }
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        Décompte += -1
    }
    finpiéton()
    Feu_Vert()
}
input.onButtonPressed(Button.A, function () {
    accespietons = 1
})
function Feu_Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Feu_Jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function finpiéton () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Feu_Rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
let accespietons = 0
let Décompte = 0
Décompte = 0
Feu_Vert()
basic.forever(function () {
    if (Décompte == 0) {
        Feu_Vert()
        basic.pause(3000)
        Feu_Jaune()
        basic.pause(2000)
        Feu_Rouge()
        if (accespietons == 1) {
            Piétons()
            accespietons = 0
        }
    }
    basic.pause(5000)
})
basic.forever(function () {
    basic.showNumber(Décompte)
})
