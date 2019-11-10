import { Component } from '@angular/core';

@Component({
  selector: 'input-comp',
  templateUrl: '../view/input.component.html'
})
export class InputComponent {

    initData: any = {};
    formSubmitted: boolean = false;
    subData:any = {};
  
    constructor(){
        this.initData.first_name = "Ramesh Babu";
        this.initData.last_name = "Ragavan";
    }

    showSummary(data: any){
        console.log("submitted Data",data);
        this.initData = {
            first_name: "",
            last_name: ""
        }
        this.subData = data;
        this.formSubmitted = true;
    }

    revert(){
        this.formSubmitted = false;
        this.subData = {};
    }
    
}
