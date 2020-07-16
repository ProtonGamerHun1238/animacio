input.onButtonPressed(Button.A, function () {
    while (asd == 1) {
        basic.showLeds(`
            # # . # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let asd = 0
asd = 1
basic.forever(function () {
	
})
