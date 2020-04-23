import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ReportsComponent } from './reports/reports.component';

import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    HomeRoutingModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
