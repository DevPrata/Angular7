import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaRelatorioComponent } from "./busca-relatorio/busca-relatorio.component";

const routes: Routes = [
  { path:"", component: BuscaRelatorioComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
