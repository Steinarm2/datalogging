input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    tabell[Tabell_Rad] = input.temperature()
    Tabell_Rad += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
let Tabell_Rad = 0
let tabell: number[] = []
tabell = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
basic.forever(function () {
	
})
