export class Tools {

    url: string = 'http://localhost:8080/';

    mapBox: any = {
        TOKEN: '&access_token=',
        GEOCODING_URL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
        DIRECTIONS_URL: 'https://api.mapbox.com/directions/v5/mapbox/walking/'
    };

    leaflet: any = {
        TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    }
}