import { Component, OnInit } from '@angular/core';

import { BaseResourceTabelaComponent } from "../../../shared/abstract/base-resource-tabela/base-resource-tabela.component";
import { LogRelatorio } from "../shared/log-relatorio.model";
import { LogRelatorioService } from "../shared/log-relatorio.service";

@Component({
  selector: 'app-listagem-log-relatorio',
  templateUrl: './listagem-log-relatorio.component.html',
  styleUrls: ['./listagem-log-relatorio.component.scss']
})
export class ListagemLogRelatorioComponent extends BaseResourceTabelaComponent<LogRelatorio> {

  cabecalho = [
    {
      texto: 'Relatório',
      icone: 'maximize-2'
    },
    {
      texto: 'Workspace',
      icone: 'maximize-2'
    },
    {
      texto: 'Acessos',
    },
    {
      texto: 'Último acesso',
    },
  ]

  constructor(protected logRelatorioService: LogRelatorioService) { 
    super(logRelatorioService)
  }

  protected montarTabela(objeto) {
    this.resources = []
    this.rows = []

    this.resources = objeto
    this.resources.forEach(item => {
      console.log(item.workspace)
      this.rows.push(
        {
          dataHora: item.relatorio,
          usuario: item.workspace,
          ip: item.acessos,
          dispositivo: item.ultimoAcesso,
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
}
