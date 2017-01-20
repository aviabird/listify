import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'stringify' })
export class StringifyPipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.replace(/\d+|-/g, '');
    }
    return value;
  }
}