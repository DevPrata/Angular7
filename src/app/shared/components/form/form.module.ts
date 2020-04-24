import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputField } from "./input-field/input-field.component";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { IMaskModule } from 'angular-imask'
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [ 
    InputField,  
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    IMaskModule
  ],

  exports:[
    // Modulos compartilhados
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    
    // Componentes compartilhados
    InputField,
  ]
})
export class FormModule { }
