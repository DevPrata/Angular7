import { Component, OnInit } from '@angular/core';

import { BaseResourceTabelaComponent } from "../../../shared/abstract/base-resource-tabela/base-resource-tabela.component";
import { LogAcesso } from "../shared/log-acesso.model";
import { LogAcessoService } from "../shared/log-acesso.service";

@Component({
  selector: 'app-listagem-log',
  templateUrl: './listagem-log.component.html',
  styleUrls: ['./listagem-log.component.scss']
})
export class ListagemLogComponent extends BaseResourceTabelaComponent<LogAcesso> {

  cabecalho = [
    {
      texto: 'Nome',
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
  
  constructor(protected logAcessoService: LogAcessoService) { 
    super(logAcessoService)
  }

  ngOnInit(): void {
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
