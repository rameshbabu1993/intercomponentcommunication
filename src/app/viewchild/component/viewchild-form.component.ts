import { Component } from '@angular/core';

@Component({
  selector: 'vc-form',
  templateUrl: '../view/viewchild-form.component.html'
})
export class VCFormComponent {

    first_name = ""; 
    last_name = "";
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
