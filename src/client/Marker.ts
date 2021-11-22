import {Color, Size, MarkerTypeLiteral} from './Types';
import {VectorInterface, GetPlayerVector, Delay, GetVectorDistance} from '../utils/utils';
import {MarkerTemplates} from './MarkerTemplates'


export class Marker {

    public kind: number;
    public systemName: string;
    public template: MarkerTypeLiteral;
    public id: number;
    public color: Color;
    public size: Size;
    public alpha: number;
    public coordinates: VectorInterface;

    constructor(systemName: string, id: number, template: MarkerTypeLiteral, coordinates: VectorInterface) {
        this.systemName = systemName;
        this.template = template;
        this.id = id;
        this.coordinates = coordinates;


        this.kind = MarkerTemplates[this.template].kind;
        this.color = MarkerTemplates[this.template].color;
        this.size = MarkerTemplates[this.template].size;
        this.alpha = MarkerTemplates[this.template].alpha;
    }

    Callback() {
        TriggerEvent(`marker:${this.systemName}`, this.id);
    }
}

export class MarkerArray {

    public allMarkers: Array<Marker>

    constructor(defaultMarkers?: Array<Marker>) {
        if (defaultMarkers) {
            this.allMarkers = [...defaultMarkers];
        } else {
            this.allMarkers = [];
        }
    }

    Add(markerToAdd: Marker) {
        this.allMarkers.push(markerToAdd);
    }

    async Render() {

        while (true) {
            await Delay(10);

            this.allMarkers.forEach(Marker => {
                // console.log('allMarkers Iteration');
                if (GetVectorDistance(GetPlayerVector(), Marker.coordinates) < 10) {
                    // @ts-ignore
                    DrawMarker(Marker.kind, Marker.coordinates.x, Marker.coordinates.y, Marker.coordinates.z - 1, 0, 0, 0, 0, 0, 0, Marker.size.sizeX, Marker.size.sizeY, Marker.size.sizeZ, Marker.color.red, Marker.color.green, Marker.color.blue, Marker.alpha, false, false, 2, false, null, null, false);
                }

                if (GetVectorDistance(GetPlayerVector(), Marker.coordinates) < 1 && IsControlJustReleased(0, 38)) {
                    Marker.Callback();
                }

            });
        }
    }
}