# multilayermap

This is a MakeCode Arcade extension that allows you to define multiple tilemap layers and switch between them, perfect for parkour-like gameplay where you move between "heights" or levels.

## Example

```ts
multilayermap.setLayer(0, tilemap`level1`)
multilayermap.setLayer(1, tilemap`level2`)
multilayermap.goToLayer(0)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let next = (multilayermap.getCurrentLayer() + 1) % 2
    multilayermap.goToLayer(next)
})
