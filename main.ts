let Countdown = 0
let Text_2 = 0
let knopf_a_counter = 0
let Text_angezeigt = 0
let Start = 0
Start += storage.getNumber(StorageSlots.s1)
if (Start == 0) {
    Start += 1
    storage.putNumber(StorageSlots.s1, Start)
    Text_angezeigt = 0
    knopf_a_counter = 0
    if (Text_angezeigt == 0) {
        if (!(input.buttonIsPressed(Button.A))) {
            basic.showString("Zum Start: drücke A")
            Text_angezeigt += 1
        } else {
            knopf_a_counter += 1
        }
    } else {
        control.waitForEvent(knopf_a_counter, 1)
    }
} else if (Start == 1 || Start == 2) {
    Start += 1
    storage.putNumber(StorageSlots.s1, Start)
} else {
    storage.removeNumber(StorageSlots.s1)
}
basic.forever(function () {
    if (!(input.isGesture(Gesture.ScreenUp)) && Text_2 == 0) {
        basic.showString("Nicht gerade")
        basic.setLedColor(0xff0000)
        basic.showString("Neige wie Pfeile")
        Text_2 += 1
        if (input.isGesture(Gesture.Shake)) {
            basic.showString("ruhig halten")
        }
        if (input.isGesture(Gesture.TiltRight)) {
            basic.showString("nach links")
            for (let index = 0; index < 4; index++) {
                basic.turnRgbLedOff()
                basic.pause(100)
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
                basic.pause(100)
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
                basic.pause(100)
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
                basic.pause(100)
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
    } else if (!(input.isGesture(Gesture.ScreenUp)) && Text_2 > 0) {
        basic.showString("Bewege leicht")
        if (input.isGesture(Gesture.Shake)) {
            basic.showString("ruhig halten")
        }
        if (input.isGesture(Gesture.TiltRight)) {
            basic.showString("nach links")
            for (let index = 0; index < 4; index++) {
                basic.turnRgbLedOff()
                basic.pause(100)
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
                basic.pause(100)
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
                basic.pause(100)
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
                basic.pause(100)
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
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(200)
        basic.showString("halte Position")
        Countdown = 5
        basic.showNumber(Countdown)
        basic.pause(200)
        for (let index = 0; index < 5; index++) {
            if (input.isGesture(Gesture.ScreenUp)) {
                Countdown += -1
                basic.showNumber(Countdown)
                basic.pause(200)
            } else {
                basic.showString("Versuche erneut ")
                control.reset()
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
        }
    }
})
