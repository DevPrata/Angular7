import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemLogRelatorioComponent } from "./listagem-log-relatorio/listagem-log-relatorio.component";

const routes: Routes = [
  { path:"", component: ListagemLogRelatorioComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRelatorioRoutingModule { }
