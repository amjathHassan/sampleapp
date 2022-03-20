import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegserveService } from '../regserve.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public val:RegserveService,public r:Router) { }

  ngOnInit(): void {
  }
valForm(formData: any){
  this.val.setReg(formData).subscribe(
    (res: any)=>{
      console.log(res);
      if(res['status']== 1){
        alert('success');
        this.r.navigate(['login'])
      }
      else if(res['status']== 2){
        alert('Failed');  
      }
      else{
        alert('Already Exist');
      }
      
    }
  );
  console.log(formData);
  
}
}
