input.onButtonPressed(Button.A, function () {
    Coches += 1
    if (Coches >= 10) {
        Coches = 10
    } else {
        servos.P0.setAngle(90)
        basic.pause(5000)
        servos.P0.setAngle(0)
    }
    basic.showString("" + (Coches))
})
input.onButtonPressed(Button.B, function () {
    Coches += -1
    if (Coches < 0) {
        Coches = 0
    } else {
        servos.P1.setAngle(90)
        basic.pause(5000)
        servos.P1.setAngle(0)
    }
    basic.showString("" + (Coches))
})
let Coches = 0
Coches = 0
servos.P0.setAngle(0)
servos.P1.setAngle(0)
basic.forever(function () {
	
})
