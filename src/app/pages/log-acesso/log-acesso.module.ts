import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogAcessoRoutingModule } from './log-acesso-routing.module';
import { ListagemLogComponent } from './listagem-log/listagem-log.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [ListagemLogComponent],
  imports: [
    CommonModule,
    LogAcessoRoutingModule,
    SharedModule
  ]
})
export class LogAcessoModule { }
