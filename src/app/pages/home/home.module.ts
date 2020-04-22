import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReportsComponent } from './reports/reports.component';

import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
