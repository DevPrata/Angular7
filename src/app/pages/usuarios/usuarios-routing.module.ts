import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemUsuarioComponent } from "./listagem-usuario/listagem-usuario.component";
import { FormUsuarioComponent } from "./form-usuario/form-usuario.component";

const routes: Routes = [
  { path:"", component: ListagemUsuarioComponent,  },
  { path:'new' , component: FormUsuarioComponent},
  { path:'edit/:id' , component: FormUsuarioComponent},
  { path:'view/:id' , component: FormUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
