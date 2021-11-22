export type Color = { red: number, green: number, blue: number };
export type Size = { sizeX: number, sizeY: number, sizeZ: number };
export type MarkerTemplateType = { kind: number, color: Color, size: Size, alpha: number };

// При добавлении новых типов маркеров, добавляем сюда
export type MarkerTemplatesType = { default: MarkerTemplateType, mission: MarkerTemplateType, garage: MarkerTemplateType, lsc: MarkerTemplateType };
export type MarkerTypeLiteral = 'default' | 'mission' | 'garage' | 'lsc';