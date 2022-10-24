controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cat.vy == 0) {
        Cat.vy = -110
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.over(true, effects.confetti)
})
let Cat: Sprite = null
game.splash("Jungle Runner")
scene.setBackgroundColor(9)
Cat = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ........................f....f
    ........................ffffff
    ........................ffffff
    ........................f9ff9f
    ........................ffffff
    ........................ffffff
    ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff
    .......ffffffffffffffffffffff.
    .......fffffffffffffffffffff..
    .......fffffffffffffffffffff..
    .......fffffffffffffffffffff..
    .......fffffffffffffffffffff..
    .......ff..ff..........ff.ff..
    .......ff..ff..........ff.ff..
    .......ff..ff..........ff.ff..
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level4`)
tiles.placeOnRandomTile(Cat, sprites.swamp.swampTile3)
scene.cameraFollowSprite(Cat)
controller.moveSprite(Cat, 100, 0)
Cat.ay = 200
