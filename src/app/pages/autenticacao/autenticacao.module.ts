import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './autenticacao-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from './home/home.component';

import { LoginModule } from './login/login.module';
import { AlterarSenhaModule } from './alterar-senha/alterar-senha.module';
import { EsqueciSenhaModule } from "./esqueci-senha/esqueci-senha.module";

@NgModule({
  declarations:[HomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    LoginModule,
    AlterarSenhaModule,
    EsqueciSenhaModule
  ]
})
export class AutenticacaoModule { }
