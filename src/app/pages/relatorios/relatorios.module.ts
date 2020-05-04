import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { BuscaRelatorioComponent } from './busca-relatorio/busca-relatorio.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BuscaRelatorioComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule,
  ]
})
export class RelatoriosModule { }
