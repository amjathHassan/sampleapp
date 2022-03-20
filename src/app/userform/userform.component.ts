import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
userform:FormGroup;
  constructor(private formbuilder:FormBuilder) {
    this.userform= formbuilder.group(
      {
        uName:new FormControl(),
        uEmail:new FormControl(),
        uPass:new FormControl(),
      }
    );
   }

  getUser(){
    console.log(this.userform.value.uName);
    
  }

  ngOnInit(): void {
  }

  //Angular Form

  // formVal(data: NgForm){
  //   console.log(data);
  //   console.log(data.value);
  //   console.log(data.value.inpName);
  // }

  // formVal(data: any){
  //   console.log(data.inpName);
    
  // }

}
