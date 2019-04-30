export class Route {
    
    intersections: Array<any>;
    distance: number;
    duration: number;

    constructor(intersections: Array<any>, distance: number, duration: number) {
        this.intersections = intersections;
        this.distance = distance;
        this.duration = duration;
    }

}