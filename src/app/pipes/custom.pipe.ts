import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value !== null && !isNaN(value)) return value * 2;
    else return `${value} is not a number`;
  }
}
