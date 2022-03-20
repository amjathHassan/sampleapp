import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(public m:MediatorService, public table:MediatorService) { }

  ngOnInit(): void {
  }
  validate(value: any){
    this.table.setForm(value);
    
  }
  dis(data: any){
    console.log(data);
    this.m.setData(data);
    
  }
}
