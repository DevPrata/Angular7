import { NgModule } from '@angular/core';
import { InputField } from "./input-field/input-field.component";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { IMaskModule } from 'angular-imask'
import { MatButtonModule } from "@angular/material/button";

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
    MatButtonModule,
    FormsModule,

    // Componentes compartilhados
    InputField
  ]
})
export class FormModule { }
