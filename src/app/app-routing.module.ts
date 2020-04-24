import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path:'', loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)},
  { path:'usuario', loadChildren: () => import("./pages/usuarios/usuarios.module").then(m => m.UsuariosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
