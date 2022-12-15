basic.forever(function () {
    pins.servoWritePin(AnalogPin.P14, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P14, 0)
    basic.pause(500)
})
