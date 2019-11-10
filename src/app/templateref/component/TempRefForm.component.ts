import { Component } from '@angular/core';

@Component({
  selector: 'temp-form',
  templateUrl: '../view/tempref-form.component.html'
})
export class TempRefFormComponent {

    first_name = "Ramesh Babu"; 
    last_name = "Ragavan";
    formSubmitted: boolean = false;
    subData: any = {};
  
    constructor(){}

    submit(){
       this.subData={
           first_name: this.first_name,
           last_name: this.last_name
       };
       this.first_name = "";
       this.last_name = "";
       this.formSubmitted = true;
    }

    revert(){
        this.subData = {};
        this.formSubmitted = false;
    }
    
}
