import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path:'', loadChildren: () => import("./pages/autenticacao/autenticacao.module").then(m => m.AutenticacaoModule)},
  { path:'usuario', loadChildren: () => import("./pages/usuarios/usuarios.module").then(m => m.UsuariosModule)},
  { path:'log-acesso', loadChildren: () => import("./pages/log-acesso/log-acesso.module").then(m => m.LogAcessoModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
