import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {

  transform(value: string, single: boolean = true): string {
    if(single)
      return "'" + value + "'";

    return '"' + value + '"';
  }

}
