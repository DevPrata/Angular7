import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { SharedModule } from "../../shared/shared.module";
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

@NgModule({
  declarations: [ListagemUsuarioComponent, FormUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
