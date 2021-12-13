makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
basic.forever(function () {
    if (makerbit.irButton() == 162) {
        basic.showString("Allumer")
    }
    if (makerbit.irButton() == 98) {
        basic.showString("Vol+")
    }
    if (makerbit.irButton() == 48) {
        basic.showNumber(1)
    }
})
