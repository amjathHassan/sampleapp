import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegserveService {
setReg(params:any){
  return this.h.get('http://beyont.in/angularapi/registration.php',{params});
}
  constructor(public h:HttpClient) { }
}
