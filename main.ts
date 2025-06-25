//% weight=100 color=#0fbc11 icon="\uf279"
//% block="Multilayer Map"
namespace multilayermap {
    let currentLayer = 0
    let layers: tiles.TileMapData[] = []

    /**
     * Define a tilemap layer at a specific index.
     * @param layer the layer number to store the tilemap
     * @param map the tilemap to assign to this layer
     */
    //% blockId="multilayermap_setLayer"
    //% block="define layer %layer|with tilemap %map"
    export function setLayer(layer: number, map: tiles.TileMapData): void {
        layers[layer] = map
    }

    /**
     * Switches the current tilemap to the one stored at the given layer.
     * @param layer the layer to switch to
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
     * Get the currently active layer.
     */
    //% blockId="multilayermap_getCurrentLayer"
    //% block="current layer"
    export function getCurrentLayer(): number {
        return currentLayer
    }
}
