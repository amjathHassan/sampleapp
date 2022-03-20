import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  
//ngForm tutorial

//getData(f1:NgForm){
  //console.log(f1);   comment 1
//  console.log(f1.value);
  //console.log(f1.value.email);  comment 1
  
//}

// getData(f1:any){
//   console.log(f1);
//   console.log(f1.email);  
// }

//Angular Pipes Example 1.0


// workers: any= [
//   {wid: 101, fName: 'Rahul', lName: 'Raj', salary: 10000},
//   {wid: 102, fName: 'Ajay', lName: 'Jith', salary: 10000},
//   {wid: 103, fName: 'Deepak', lName: 'Nath', salary: 40000},
// ]

//Angular Pipes

// person: any = {
//   id: 1, fName: 'Ajith', lName: 'Mohan', age: 22, dob: '07/09/1999', salary: 50000 , city: 'tvm', 
// }  
   
//Attribute Directive

// cValue:any = 'yellow';
// bgValue: any = 'black';
// a: any = 'style1';
// b: any = 'style3';

//ngSwitch Example 1.1 ngModel

// a:any;
// b:any;
// r:any;
// n:any;

// add:any;         
// sub:any;         
// mul:any;
// fun(){
//   this.n = this.r;
//   this.add = this.a +this.b;
//   this.sub = this.a -this.b;
//   this.mul = this.a *this.b;
//   document.getElementById('op')?.focus()
// }

//ngSwitch Example 1.0 keypress event

//  n:any = 0;
//   add:any = 0;
//   sub:any = 0;
//   mul:any = 0;
  
//   keyOp(a:any, b:any, c:any){
//           this.n = c;
//           this.add = parseInt(a) + parseInt(b);
//           this.sub = parseInt(a) - parseInt(b);
//           this.mul = parseInt(a) * parseInt(b);
  
//   }

//ngSwitch tutorial

// n:any = 0;
// add:any = 0;
// sub:any = 0;
// mul:any = 0;

// performRes(a:any, b:any, c:any){
//         this.n = c;
//         this.add = parseInt(a) + parseInt(b);
//         this.sub = parseInt(a) - parseInt(b);
//         this.mul = parseInt(a) * parseInt(b);

// }



//ngFor tutorial


// students:any[] = ["anu", "aju", "manu"];
  

// users:any[] = [
//       {id: 1, name: "amjath"},
//       {id: 2, name: "hassan"},
//       {id: 3, name: "abu"},
      
//   ];
  
//ngIf example 1.0

// value:any = " ";

// trueFn(){
//   this.value = true;
// }
// falseFn(){
//   this.value = false;
// }


//tutorial sec - 3


//  cdn = 5 > 3;

//  value:any = this.cdn;

// res:any = 0;

// pow(p:any){
//   this.res = p*p;
  
// }


  // modName = "amjath";

  // name2 = 'amjath';
  // disInp(a:string){
  //   this.name2 = a;
  // }


// 
//tutorial sec 2

  // nameImp = '';
  // emailImp = '';
  // mobImp = '';

  // showDetails(a:string, b:string, c:string){
    
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  //   this.nameImp = a;
  //   this.emailImp = b;
  //   this.mobImp = c;
  //   return false;
  // }
  
  //tutorial sec 1
  
  // data="hello";
  // display(s:any)
  // {
  //   alert("welcome"+s);
  // }



  //  title= 'amjath';
   
  //  num1 = 5;
  //  num2 = 6;
  //  nameImp1='';
  
  //  res = this.num1 + this.num2;
  
  //  pic ="/assets/img/sqg.jpg";
  
  //  inpName ="Enter your name";
  
  //  displayAlert(){
  //      alert("hey alert is displayed");
  //    }
  // nameImp='';
  //   printData(s:string){
     
  //    this.nameImp = s;
  //    //this.nameImp1 = sname.value;
  //    console.log('welcome ' + s);
  //    return false;
  //  }
  //  printImp(s:string){
  //    console.log(s);
     
     
  //  }
}
