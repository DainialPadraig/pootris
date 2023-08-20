input.onGesture(Gesture.TiltLeft, function () {
    poo.set(LedSpriteProperty.Direction, 90)
})
function gameLoop () {
    while (!(game.isGameOver())) {
        poo = game.createSprite(2, 0)
        poo.set(LedSpriteProperty.Direction, 180)
        while (!(poo.isTouchingEdge())) {
            poo.move(1)
            basic.pause(300)
        }
    }
    if (game.score() > highScore) {
        highScore = game.score()
    }
}
input.onGesture(Gesture.ScreenUp, function () {
    poo.set(LedSpriteProperty.Direction, 180)
})
input.onGesture(Gesture.TiltRight, function () {
    poo.set(LedSpriteProperty.Direction, 270)
})
let highScore = 0
let poo: game.LedSprite = null
joystickbit.initJoystickBit()
game.setScore(0)
gameLoop()
