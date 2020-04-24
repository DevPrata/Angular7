import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { IconsModule } from "./components/icons/icons.module";
import { FormModule } from "./components/form/form.module";

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TableComponent } from './components/table/table.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NavbarComponent } from "./components/navbar/navbar.component";


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    TableComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
  ],
  exports: [
    // Modulos compartilhados
    IconsModule,
    FormModule,

    // Componentes compartilhados
    BreadCrumbComponent,
    PageHeaderComponent,
    TableComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
