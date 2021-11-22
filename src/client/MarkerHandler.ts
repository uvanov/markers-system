import { MarkerTypeLiteral } from './Types';
import { Marker, MarkerArray } from './Marker';
import './Events';

const MarkersList = {
    bar: [
        {
            id: 0,
            type: 'bar',
            template: 'default',
            coordinates: {
                x: -2046.43,
                y: 3148.33,
                z: 32.81
            }
        }
    ],

    lsc: [
        {
            id: 0,
            type: 'lsc',
            template: 'lsc',
            coordinates: {
                x: -2053.13,
                y: 3146.99,
                z: 32.81
            }
        }
    ]
}

const AllMarkers = new MarkerArray();

for (let key in MarkersList){
    // @ts-ignore
    MarkersList[key].forEach(MarkerInformation => {
        // @ts-ignore
        const NewMarker = new Marker(key, MarkerInformation.id, MarkerInformation.template, MarkerInformation.coordinates)

        AllMarkers.Add(NewMarker);
    });
}

AllMarkers.Render();

