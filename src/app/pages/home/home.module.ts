import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { LoginComponent } from './login/login.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
