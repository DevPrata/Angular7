import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRelatorioRoutingModule } from './log-relatorio-routing.module';
import { ListagemLogRelatorioComponent } from './listagem-log-relatorio/listagem-log-relatorio.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListagemLogRelatorioComponent],
  imports: [
    CommonModule,
    LogRelatorioRoutingModule,
    SharedModule
  ]
})
export class LogRelatorioModule { }
