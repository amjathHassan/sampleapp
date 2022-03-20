import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  constructor(public viewtable:ViewService, public re: Router) { }

edt(editTable: any){
  console.log(editTable);
  this.viewtable.getEdit(editTable);
  this.re.navigate(['edit']);

}

del(dataTable:any){
  console.log(dataTable);
  this.viewtable.delTable(dataTable).subscribe(
    (res: any)=>{
      console.log(res);
      if(res['status'] == 1){
        alert('success');
        this.viewtable.getTable().subscribe(
          (res: any)=>{
            console.log(res);
            this.tableData = res["data"];
          }
        );
      }
      else if(res['status']==2){
        alert('failed');
      }
      else{
        alert('Variable not set');
      }
    }
  );

  
}
tableData:any;
  ngOnInit(): void {
  this.viewtable.getTable().subscribe(
    (res: any)=>{
      console.log(res);
      this.tableData = res["data"];
      
    }
  );
  
  }

}
