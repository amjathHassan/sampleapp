import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit {
msg:any= "";
constructor(public mm:MediatorService, public formDetails:MediatorService) { }
formDet:any=[];
ngOnInit(): void {
    this.msg = this.mm.data1;
    this.formDet = this.formDetails.formVal;
  }

}
