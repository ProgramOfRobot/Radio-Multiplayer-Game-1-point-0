input.onPinPressed(TouchPin.P0, function () {
    Me.change(LedSpriteProperty.Y, 1)
    radio.sendValue("Y", 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("Plz Connect", 0)
})
input.onButtonPressed(Button.A, function () {
    Me.change(LedSpriteProperty.X, -1)
    radio.sendValue("X", -1)
})
function RunLoopOfGame () {
	
}
input.onButtonPressed(Button.B, function () {
    Me.change(LedSpriteProperty.X, 1)
    radio.sendValue("X", 1)
})
input.onPinPressed(TouchPin.P1, function () {
    Me.change(LedSpriteProperty.Y, -1)
    radio.sendValue("Y", -1)
})
function Main () {
    Init()
    RunLoopOfGame()
}
radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        let enemyPos: number
if (value < 0) {
            enemyPos = Enemy.get(LedSpriteProperty.X)
            Enemy.set(LedSpriteProperty.X, enemyPos + 1)
        } else {
            enemyPos = Enemy.get(LedSpriteProperty.X)
            Enemy.set(LedSpriteProperty.X, enemyPos - 1)
        }
    } else if (name == "Y") {
        let enemyPos2: number
if (value < 0) {
            enemyPos2 = Enemy.get(LedSpriteProperty.Y)
            Enemy.set(LedSpriteProperty.Y, enemyPos2 + 1)
        } else {
            enemyPos2 = Enemy.get(LedSpriteProperty.Y)
            Enemy.set(LedSpriteProperty.Y, enemyPos2 - 1)
        }
    } else {
        game.pause()
        basic.showString("Connected!")
        game.resume()
    }
})
function Init () {
    radio.setGroup(114514)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    Me = game.createSprite(4, 4)
    Enemy = game.createSprite(0, 0)
    Enemy.set(LedSpriteProperty.Brightness, 100)
}
let Me: game.LedSprite
let Enemy: game.LedSprite
let onStart: boolean
Main()
