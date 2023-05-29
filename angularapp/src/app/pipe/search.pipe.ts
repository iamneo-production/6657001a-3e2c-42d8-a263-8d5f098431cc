import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, fields: string[]): any[] {
    if (!searchTerm || !items || !fields || fields.length === 0) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();
    const filteredItems = items.filter(item => {
      return fields.some(field => {
        const fieldValue = (item[field]).toString().toLowerCase();
        return fieldValue.includes(searchTerm);
      });
    });

    return filteredItems;
  }
}
