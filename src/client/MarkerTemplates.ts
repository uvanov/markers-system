import { MarkerTemplatesType } from "./Types";

export const MarkerTemplates: MarkerTemplatesType = {
    default: {
        kind: 1,
        color: {red: 207, green: 181, blue: 106},
        size: { sizeX: 0.5, sizeY: 0.5, sizeZ: 0.3 },
        alpha: 0.5
    },

    mission: {
        kind: 1,
        color: {red: 92, green: 192, blue: 106},
        size: { sizeX: 0.5, sizeY: 0.5, sizeZ: 0.3 },
        alpha: 0.5
    },

    garage: {
        kind: 1,
        color: {red: 214, green: 79, blue: 102},
        size: { sizeX: 2, sizeY: 2, sizeZ: 0.2 },
        alpha: 0.5
    },

    lsc: {
        kind: 1,
        color: {red: 144, green: 174, blue: 255},
        size: { sizeX: 2, sizeY: 2, sizeZ: 0.2 },
        alpha: 0.5
    }
}