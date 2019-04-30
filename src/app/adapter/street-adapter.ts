import { Street } from '../model/street';

export class StreetAdapter {

    adaptToDisplay(item: any) {
        let street = new Street();
        street.name = item.name;
        return street;
    }

}