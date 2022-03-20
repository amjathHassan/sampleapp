import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameReverse'
})
export class NameReversePipe implements PipeTransform {


  transform(name: string): string {
  
  let revName = '';
  for(let j = name.length - 1;j >= 0; j--){
    revName += name.charAt(j);
  }
  return revName;
  }

}
