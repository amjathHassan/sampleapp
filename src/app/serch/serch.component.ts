import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {

  constructor(public searchName: ViewService) { }
  resultData:any[] = [];
  getName(data: any){
    console.log(data.name);
    this.searchName.getUserName().subscribe(
      (res: any)=> {
        for(let i of res['data']){

          if(i['name'].startsWith(data.name)){
            console.log(i);
            this.resultData.push(i);
            
          }
        }
        
      }
    );
    
  }
  clear(){
    this.resultData.length = 0;
  }
  ngOnInit(): void {
   
  }

}
