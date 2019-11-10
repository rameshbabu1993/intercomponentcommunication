import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'ser-form',
  templateUrl: "../view/ser-form.component.html" 
})
export class SerFormComponent implements OnInit {

  first_name: string = "Ramesh Babu";
  last_name: string = "Ragavan";

  constructor(private data: DataService) { }

  ngOnInit() {}

  submit(){
    this.data.changeData({subData: {first_name: this.first_name, last_name: this.last_name}, formSubmitted: true });
    this.first_name = "";
    this.last_name = "";
  }

}