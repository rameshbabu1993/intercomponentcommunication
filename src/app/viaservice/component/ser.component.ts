import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'ser-comp',
  templateUrl: "../view/ser.component.html" 
})
export class SerComponent implements OnInit {

  subData: any = {};
  fromSubmmitted: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentData.subscribe(data => {
        this.subData = data.subData;
        this.fromSubmmitted = data.formSubmitted;
    });
  }

  revert(){
    this.data.changeData({subData: {first_name: "", last_name: ""}, formSubmitted: false });
  }
}