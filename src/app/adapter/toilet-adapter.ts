import { Toilet } from '../model/toilet';

export class ToiletAdapter {

    adaptToDisplay(item: any) {
        let toilet = new Toilet();
        toilet.longitude = item.longitude;
        toilet.latitude = item.latitude;
        toilet.address = item.address;
        return toilet;
    }

}