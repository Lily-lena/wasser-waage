let Countdown = 0
let Text_angezeigt = 0
let knopf_a_counter = 0
loops.everyInterval(500, function () {
    if (!(input.isGesture(Gesture.ScreenUp))) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        basic.showString("Bewege")
        if (input.isGesture(Gesture.Shake)) {
            basic.showString("ruhig halten")
        }
        if (input.isGesture(Gesture.TiltRight)) {
            basic.showString("nach links")
            for (let index = 0; index < 4; index++) {
                basic.turnRgbLedOff()
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `)
                basic.setLedColor(0xff0000)
            }
        }
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.showString("nach rechts")
            for (let index = 0; index < 4; index++) {
                basic.turnRgbLedOff()
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
                basic.setLedColor(0xff0000)
            }
        }
        if (input.isGesture(Gesture.ScreenUp)) {
            basic.showString("nach unten")
            for (let index = 0; index < 4; index++) {
                basic.turnRgbLedOff()
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `)
                basic.setLedColor(0xff0000)
            }
        }
        if (input.isGesture(Gesture.ScreenDown)) {
            basic.showString("nach oben")
            for (let index = 0; index < 4; index++) {
                basic.turnRgbLedOff()
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
                basic.setLedColor(0xff0000)
            }
        }
    } else {
        basic.setLedColor(0xffff00)
        basic.showString("halte Position")
        basic.showLeds(`
            . . . . #
            . . . # #
            # . # # .
            # # # . .
            . # . . .
            `)
        Countdown = 5
        basic.showNumber(Countdown)
        for (let index = 0; index < 4; index++) {
            if (input.isGesture(Gesture.ScreenUp)) {
                Countdown += -1
                basic.showNumber(Countdown)
            }
        }
        if (Countdown == 0) {
            basic.setLedColor(0x00ff00)
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            control.reset()
        } else {
        	
        }
    }
})
basic.forever(function () {
    if (Text_angezeigt == 0) {
        if (!(input.buttonIsPressed(Button.A))) {
            basic.showString("Zum Start: drücke Knopf A")
            Text_angezeigt += 1
        } else {
            knopf_a_counter += 1
        }
    } else {
        control.waitForEvent(knopf_a_counter, 1)
    }
})
