radio.setGroup(166)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendNumber(166)
})
