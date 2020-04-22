import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { IconsModule } from "./icons/icons.module";

import { IMaskModule } from 'angular-imask'

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TableComponent } from './components/table/table.component';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { InputField } from "./components/input-field-base/input-field.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    TableComponent,
    InputField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IconsModule,
    MatFormFieldModule,
    MatInputModule,
    IMaskModule
  ],
  exports: [
    // Modulos compartilhados
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IconsModule,

    // Componentes compartilhados
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    TableComponent,
    InputField
  ]
})
export class SharedModule { }
