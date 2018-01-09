import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'range',
    pure: false
})

export class RangePipe implements PipeTransform {
    transform(items: any[], quantity: number): any {
        items.length = 0;
        quantity = Math.ceil(quantity);
        for (let i = 0; i < quantity; i++) {
            items.push(i);
        }
        return items;
    }
}
