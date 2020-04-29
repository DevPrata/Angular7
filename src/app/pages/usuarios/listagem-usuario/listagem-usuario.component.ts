import { Component, OnInit } from '@angular/core';

import { BaseResourceTabelaComponent } from "../../../shared/abstract/base-resource-tabela/base-resource-tabela.component";
import { Usuario } from "../shared/usuario.model";
import { UsuarioService } from "../shared/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent extends BaseResourceTabelaComponent<Usuario> {

  cabecalho = [
    {
      texto: 'Nome',
      icone: 'maximize-2'
    },
    {
      texto: 'CPF/CNPJ',
      icone: 'maximize-2'
    },
    {
      texto: 'E-mail',
      icone: 'maximize-2'
    },
    {
      texto: 'Cliente',
    },
    {
      texto: 'Status'
    },
    {
      texto: 'Ações'
    }
  ]

  constructor(protected usuarioService: UsuarioService, private router: Router) {
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
          documento: item.documento,
          email: item.email,
          cliente: item.nome,
          status: {
            valor:item.status,
            tipo:'verdadeiroOuFalso',
            texto:item.statusText
          }
        }
      )
    })
    this.pagina = 1
    this.qtPaginas = 8
    this.qtResultados = 15
  }

  buscar(valor){
    console.log(valor)
  }

  acaoIcone(evento){
    if(evento.acao === 0){
      this.router.navigate(['usuario','edit',this.resources[evento.index].id]);
    }else if (evento.acao === 1){
      this.router.navigate(['usuario','view',this.resources[evento.index].id]);
    }
  }

}
