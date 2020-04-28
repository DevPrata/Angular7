import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EsqueciSenhaComponent } from './esqueci-senha.component';
import { SharedModule } from "../../../shared/shared.module";



@NgModule({
  declarations: [EsqueciSenhaComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    EsqueciSenhaComponent
  ]
})
export class EsqueciSenhaModule { }
