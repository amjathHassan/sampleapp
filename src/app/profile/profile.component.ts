import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public veiwPro:ViewService) { }
showProfile:any;
textid:any;
textname:any;
textemail:any;
textpsd:any;
  ngOnInit(): void {
    this.veiwPro.viewProfile(this.veiwPro.seePr).subscribe(
      (res: any)=>{
        console.log(res);
        this.showProfile = res['content'];
        this.textid = this.showProfile.id;
        this.textname = this.showProfile.name;
        this.textemail = this.showProfile.email;
        this.textpsd = this.showProfile.password;

        
      }
    )
  }

}
