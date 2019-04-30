import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'distance' })

export class DistancePipe implements PipeTransform {
    transform(value) {
        return (Math.round(value / 10)) * 10;
    }
}
