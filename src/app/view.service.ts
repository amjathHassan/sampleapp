import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
editData:any;
seePr: any;
  constructor(public getDet:HttpClient) { }
  getTable(){
    return this.getDet.get('http://beyont.in/angularapi/getuser.php');
  }
  delTable(params: any){
    return this.getDet.get("http://beyont.in/angularapi/deleteuser.php?id="+params);
  }
  getEdit(em: any){
    console.log(em);
    this.editData = em;
  }
  editdata(params: any){
    return this.getDet.get('http://beyont.in/angularapi/getuserbyid.php?email='+params)
  }
  updatePro(params: any){
    return this.getDet.get('http://beyont.in/angularapi/updateuser.php',{params})
  }
  getProfile(value: any){
    console.log(value);
    this.seePr= value;
    
  }
  viewProfile(params: any){
    return this.getDet.get('http://beyont.in/angularapi/getuserbyid.php?email='+params)
  }
  getUserName(){
    return this.getDet.get('http://beyont.in/angularapi/getuser.php');
  }
}
