import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from "./table.component";
import { MatMenuModule } from "@angular/material/menu";
import { IconsModule } from "../icons/icons.module";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    IconsModule,
    MatSelectModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
