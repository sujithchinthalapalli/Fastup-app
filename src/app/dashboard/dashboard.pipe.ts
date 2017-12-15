import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class DashboardFilterPipe implements PipeTransform {
  transform(value: any, args: string[], args1: any): any {
    let filter = args.toString().toLowerCase();
    let temp = args1;
    return filter ? value.filter(day => day.Name.toString().toLowerCase().indexOf(filter) != -1) : value;
  }

}

// #listFilter (keyup)="listFilter.value.length"