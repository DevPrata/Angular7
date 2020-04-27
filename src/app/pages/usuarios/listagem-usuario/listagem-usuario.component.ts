import { Component, OnInit } from '@angular/core';

import { BaseResourceTabelaComponent } from "../../../shared/abstract/base-resource-tabela/base-resource-tabela.component";
import { Usuario } from "../shared/usuario.model";
import { UsuarioService } from "../shared/usuario.service";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent extends BaseResourceTabelaComponent<Usuario> {

  cabecalho = [
    {
      texto: 'Nome',
      icone:'maximize-2'
    },
    {
      texto: 'E-mail',
      icone:'maximize-2'
    },
    {
      texto: 'Cliente',
    },
    {
      texto:'Status'
    },
    {
      texto: 'Ações'
    }
  ]

  constructor(protected usuarioService: UsuarioService) {
    super(usuarioService)
  }


  protected montarTabela(objeto) {
    this.resources = []
    this.rows = []

    this.resources = objeto
    this.resources.forEach(item => {
      this.rows.push(
        {
          nome: item.cliente,
          email: item.email,
          cliente: item.nome,
          status: item.status,
        }
      )
    })
    this.pagina = 1
    this.qtPaginas = 8
    this.qtResultados = 15
  }

}
