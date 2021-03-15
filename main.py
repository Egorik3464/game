def on_button_pressed_a():
    Player.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Player.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Youre_Coins = 0
Coin: game.LedSprite = None
Player: game.LedSprite = None
Player = game.create_sprite(2, 4)

def on_forever():
    global Coin, Youre_Coins
    Coin = game.create_sprite(randint(0, 4), 0)
    Coin.set(LedSpriteProperty.DIRECTION, 180)
    if Player.is_touching(Coin):
        Coin.delete()
    for index in range(5):
        basic.pause(200)
        Coin.move(1)
        if Player.is_touching(Coin):
            Coin.delete()
            Youre_Coins += 1
    Coin.delete()
basic.forever(on_forever)
