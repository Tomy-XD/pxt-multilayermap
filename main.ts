//% weight=100 color=#0fbc11 icon="\uf279"
//% block="Multilayer Map"
namespace multilayermap {
    let currentLayer = 0
    let layers: tiles.TileMapData[] = []

    /**
     * Define a tilemap layer. Use this block multiple times to register layers.
     */
    //% blockId="multilayermap_setLayer"
    //% block="define layer %layer|with tilemap %map"
    export function setLayer(layer: number, map: tiles.TileMapData): void {
        layers[layer] = map
    }

    /**
     * Switches to the given map layer.
     */
    //% blockId="multilayermap_goToLayer"
    //% block="go to layer %layer"
    export function goToLayer(layer: number): void {
        if (layers[layer]) {
            tiles.setTilemap(layers[layer])
            currentLayer = layer
        }
    }

    /**
     * Returns the currently active layer index.
     */
    //% blockId="multilayermap_getCurrentLayer"
    //% block="current layer"
    export function getCurrentLayer(): number {
        return currentLayer
    }
}
