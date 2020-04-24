import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterarSenhaComponent } from "./alterar-senha.component";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AlterarSenhaComponent
  ]
})
export class AlterarSenhaModule { }
