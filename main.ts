input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("hi guys")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
