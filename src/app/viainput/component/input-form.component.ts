import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: '../view/input-form.component.html'
})
export class InputFormComponent {

    _first_name = ""; 
    _last_name = "";

    @Input()
    set first_name(first_name: string){
        this._first_name = first_name;
    }

    @Input()
    set last_name(last_name: string){
        this._last_name = last_name;
    }

    @Output() submitForm = new EventEmitter<any>();

    initData: any = {};
  
    constructor(){}

    submit(){
        this.submitForm.emit({first_name: this._first_name, last_name: this._last_name});
    }
    
}
