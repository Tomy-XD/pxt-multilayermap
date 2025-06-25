# multilayermap

A MakeCode Arcade extension for creating **multilayer tilemaps**—ideal for parkour-style games with multiple heights.

## Features

- Define multiple tilemap layers
- Switch active layer with blocks or code
- Track the current layer for movement logic

## Blocks Provided

| Block | Description |
|-------|-------------|
| `define layer %layer with tilemap %map` | Register a layer |
| `go to layer %layer` | Activate a layer |
| `current layer` | Get the current active layer number |

## Example Usage

```ts
multilayermap.setLayer(0, tilemap`layer0`)
multilayermap.setLayer(1, tilemap`layer1`)
multilayermap.goToLayer(0)

controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    const next = (multilayermap.getCurrentLayer() + 1) % 2
    multilayermap.goToLayer(next)
})
