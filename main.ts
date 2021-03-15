input.onPinPressed(TouchPin.P0, function () {
    game.pause()
    basic.showString("" + (Score))
    music.playMelody("C5 B A G - A B C5 ", 120)
})
input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.resume()
})
let Coin: game.LedSprite = null
let Score = 0
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
basic.forever(function () {
    Coin = game.createSprite(randint(0, 4), 0)
    Coin.set(LedSpriteProperty.Direction, 180)
    if (Player.isTouching(Coin)) {
        Coin.delete()
    }
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        Coin.move(1)
        if (Player.isTouching(Coin)) {
            Coin.delete()
            Score += 1
        }
    }
    Coin.delete()
})
