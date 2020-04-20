import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { IconsModule } from "./icons/icons.module";

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TableComponent } from './components/table/table.component';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IconsModule
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
    TableComponent
  ]
})
export class SharedModule { }
