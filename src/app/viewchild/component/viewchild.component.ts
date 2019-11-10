import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import { VCFormComponent } from "./viewchild-form.component";

@Component({
  selector: 'vc-comp',
  templateUrl: '../view/viewchild.component.html'
})
export class VCComponent implements AfterViewInit{
  
    @ViewChild(VCFormComponent)
    vcFrom: VCFormComponent;

    constructor(){ }
    
    ngAfterViewInit(){
      setTimeout(()=>{
        this.vcFrom.first_name = "Ramesh Babu";
        this.vcFrom.last_name = "Ragavan";
      }, 0);
    }

    revert(){
      this.vcFrom.revert();
    }
}
