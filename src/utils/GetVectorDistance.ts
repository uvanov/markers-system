interface VectorInterface {
    x: number;
    y: number;
    z: number
}

export function GetVectorDistance(vec1: VectorInterface, vec2: VectorInterface): number{
    console.log('GetVectorDistance Function');
    let dx: number = vec1.x - vec2.x;
    let dy: number = vec1.y - vec2.y;
    let dz: number = vec1.z - vec2.z;

    return Math.sqrt((Math.pow(dx, 2)) + (Math.pow(dy, 2)) + (Math.pow(dz, 2)));
}
