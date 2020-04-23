import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { IconsModule } from "./components/icons/icons.module";

import { IMaskModule } from 'angular-imask'

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TableComponent } from './components/table/table.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InputField } from "./components/input-field/input-field.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    TableComponent,
    InputField,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IconsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    IMaskModule
  ],
  exports: [
    // Modulos compartilhados
    ReactiveFormsModule,
    RouterModule,
    IconsModule,

    // Componentes compartilhados
    BreadCrumbComponent,
    PageHeaderComponent,
    TableComponent,
    InputField,
    NavbarComponent
  ]
})
export class SharedModule { }
