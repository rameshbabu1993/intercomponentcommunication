import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { InputComponent } from "./viainput/component/input.component";
import { InputFormComponent } from "./viainput/component/input-form.component";

import { TemprefComponent } from "./templateref/component/tempref.component";
import { TempRefFormComponent } from "./templateref/component/TempRefForm.component";

import { VCComponent } from "./viewchild/component/viewchild.component";
import { VCFormComponent } from "./viewchild/component/viewchild-form.component";

import { SerComponent } from "./viaservice/component/ser.component";
import { SerFormComponent } from "./viaservice/component/ser-form.component";
import { DataService } from "./viaservice/service/data.service";

const declarations = [AppComponent, InputComponent, InputFormComponent, 
                      TemprefComponent, TempRefFormComponent,VCComponent, VCFormComponent, SerComponent, SerFormComponent];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
