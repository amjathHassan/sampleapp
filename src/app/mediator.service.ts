import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
data1:any = '';
formVal:any= [];
setForm(formData:any){
  console.log(formData);
  this.formVal.push(formData);
  
  

}
setData(d:any){
  console.log(d);
  this.data1= d;
  
}
  constructor() { }
}
