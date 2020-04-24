import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputField } from "./input-field/input-field.component";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { IMaskModule } from 'angular-imask'
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { IconsModule } from "../icons/icons.module";

@NgModule({
  declarations: [ 
    InputField,  
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    IMaskModule,
    IconsModule
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
