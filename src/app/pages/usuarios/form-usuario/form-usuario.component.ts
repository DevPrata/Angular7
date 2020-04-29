import { Component, OnInit, Injector } from '@angular/core';

import { BaseResourceFormComponent } from "../../../shared/abstract/base-resource-form/base-resource-form.component";
import { Usuario } from "../shared/usuario.model";
import { UsuarioService } from "../shared/usuario.service";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent extends BaseResourceFormComponent<Usuario> {

  constructor(protected usuarioService: UsuarioService, protected injector: Injector) { 
    super(injector, new Usuario(), usuarioService, Usuario.fromJson)
  }

  protected creationPageTitle(): string {
    return "novo usuário";
  }

  protected editionPageTitle(): string {
    return "edição usuário " 
  }
}
