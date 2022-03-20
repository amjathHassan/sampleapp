import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserveService {
loginFn(params: any){
  return this.logs.get('http://beyont.in/angularapi/login.php', {params})  
}
  constructor(public logs:HttpClient) { }
}
