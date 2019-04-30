import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'time' })

export class TimePipe implements PipeTransform {
    transform(value) {
        return Math.round(value / 60);
    }
}
