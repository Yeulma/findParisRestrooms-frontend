import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'address' })

export class AddressPipe implements PipeTransform {
    transform(value) {
        let values = value.split('');
        for (let i = 0; i < values.length; i++) {
            if (values[i - 1] === ' ') {
                values[i] = values[i].toUpperCase();
            } else {
                values[i] = values[i].toLowerCase();
            }
        }
        return values.join('');
    }
}
