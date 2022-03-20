import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryHighlight'
})
export class SalaryHighlightPipe implements PipeTransform {

  transform(slr: any): any {
    let a;
    if(slr >= 25000){
      return "High Salary";
    }
    else{
      return "Low Salary";
    }
   }

}
