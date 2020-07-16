input.onButtonPressed(Button.A, function () {
    while (asd == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    while (asd == 1) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.pause(200)
    }
})
let asd = 0
asd = 1
basic.showString("Hello!")
basic.forever(function () {
	
})
