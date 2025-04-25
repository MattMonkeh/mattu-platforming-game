let list: Image = null
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    console.log("hello world")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
// idk, i saw a keyboard plugin so ye
browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, function () {
    debugOn = 1
    console.log("Debug on")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Plyr.vy == 0) {
        Plyr.vy = -150
    }
})
function createPlayer () {
    Plyr = sprites.create(img`
        ....................
        ...111111111111111..
        ..1fffffffffffffff1.
        ..1ffff11fffff11ff1.
        ..1ffff11fffff11ff1.
        ..1ffff11fffff11ff1.
        ..1ffff11fffff11ff1.
        ..1ffff11fffff11ff1.
        ..1fffffffffffffff1.
        ..1fffff1ff1ffffff1.
        ...111111111111111..
        ........11..........
        .......1ff1.........
        .......1ff1.........
        ......11ff1.........
        ......1ffff1........
        .....1fffff1........
        ....1fffffff1.......
        .11.111111111...11..
        1111...........1111.
        `, SpriteKind.Player)
    Plyr.setStayInScreen(true)
    controller.moveSprite(Plyr, 100, 0)
    Plyr.ay = 370
    scene.cameraFollowSprite(Plyr)
}
let Plyr: Sprite = null
let debugOn = 0
let collectable: Sprite = null
game.splash("Mattu's Games Presents...")
game.splash("Mattu's Games Presents...", "A game called...")
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`tutorial`)
createPlayer()
for (let value of tiles.getTilesByType(list)) {
    collectable = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
