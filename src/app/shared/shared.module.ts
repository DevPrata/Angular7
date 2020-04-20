import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TableComponent } from './components/table/table.component';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

 
import { FeatherModule } from 'angular-feather';
import { ChevronRight,ChevronLeft,Maximize2,Repeat } from 'angular-feather/icons';
const icons = {
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Repeat
};

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
    FeatherModule.pick(icons)

  ],
  exports: [
    // Modulos compartilhados
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FeatherModule,

    // Componentes compartilhados
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    TableComponent
  ]
})
export class SharedModule { }
