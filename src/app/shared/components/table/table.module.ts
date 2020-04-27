import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from "./table.component";
import { MatMenuModule } from "@angular/material/menu";
import { IconsModule } from "../icons/icons.module";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    IconsModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
