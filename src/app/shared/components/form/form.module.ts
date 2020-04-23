import { NgModule } from '@angular/core';
import { InputField } from "./input-field/input-field.component";
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { IMaskModule } from 'angular-imask'

@NgModule({
  declarations: [ InputField ],

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    IMaskModule
  ],

  exports:[
    // Modulos compartilhados
    ReactiveFormsModule,

    // Componentes compartilhados
    InputField
  ]
})
export class FormModule { }
