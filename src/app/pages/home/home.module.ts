import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from "../../shared/shared.module";

import { LoginModule } from './login/login.module';
import { AlterarSenhaModule } from './alterar-senha/alterar-senha.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations:[HomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    LoginModule,
    AlterarSenhaModule
  ]
})
export class HomeModule { }
