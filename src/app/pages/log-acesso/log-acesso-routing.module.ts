import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemLogComponent } from "./listagem-log/listagem-log.component";

const routes: Routes = [
  { path:"", component: ListagemLogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogAcessoRoutingModule { }
