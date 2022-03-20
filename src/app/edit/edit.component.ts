import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public emailGet: ViewService, public re: Router) { }
  textid:any;
  textname:any;
  textemail:any;
  textpsd:any;
  contentObj:any;
  update(updateVal: any){
    console.log(updateVal);
    this.emailGet.updatePro(updateVal).subscribe(
      (res: any)=>{
        console.log(res);
        if(res['status']==1){
          alert('Success');
          this.re.navigate(['viewpage'])
        }else if(res['status']==2){
          alert('Failed');
        }else{
          alert('variables not set')
        }
        
      }
    );
  }
  ngOnInit(): void {
    this.emailGet.editdata(this.emailGet.editData).subscribe(
      (res: any)=>{
        console.log(res);
        this.contentObj = res['content'];
        console.log(this.contentObj);
        this.textid = this.contentObj.id;
        this.textname = this.contentObj.name;
        this.textemail = this.contentObj.email;
        this.textpsd = this.contentObj.password;
      }
    )
  }

}
