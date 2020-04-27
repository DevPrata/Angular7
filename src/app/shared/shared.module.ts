import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { IconsModule } from "./components/icons/icons.module";
import { FormModule } from "./components/form/form.module";
import { TableModule } from "./components/table/table.module";

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NavbarComponent } from "./components/navbar/navbar.component";


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
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
    TableModule,
    
    // Componentes compartilhados
    BreadCrumbComponent,
    PageHeaderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
