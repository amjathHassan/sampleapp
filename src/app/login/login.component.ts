import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogserveService } from '../logserve.service';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logVal(data: any){
    console.log(data);
    this.logDet.loginFn(data).subscribe(
      (res: any) => {
        console.log(res);
        if(res['status'] == 1){
          alert('success');
          this.seePro.getProfile(data.email);
          this.re.navigate(['profile']);
          
        }
        else if(res['status'] ==2){
          alert('failed');
        }
        else{
          alert('not exist');
          if(data.email =='admin' && data.password == 'admin@123'){
            this.re.navigate(['viewpage']);
          }
        }
      }
    );
    
  }
  constructor(public logDet:LogserveService, public re:Router, public seePro:ViewService) { }

  ngOnInit(): void {
  }

}
