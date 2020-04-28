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
      texto: 'Data e hora',
      icone: 'maximize-2'
    },
    {
      texto: 'Usuário',
      icone: 'maximize-2'
    },
    {
      texto: 'Endereço IP',
    },
    {
      texto: 'Dispositivo',
    },
    {
      texto: 'Navegador'
    },
    {
      texto: 'Localização'
    }
  ]
  
  constructor(protected logAcessoService: LogAcessoService) { 
    super(logAcessoService)
  }


  protected montarTabela(objeto) {
    this.resources = []
    this.rows = []

    this.resources = objeto
    this.resources.forEach(item => {
      this.rows.push(
        {
          dataHora: item.dataHora,
          usuario: item.usuario,
          ip: item.ip,
          dispositivo: item.dispositivo,
          navegador: item.navegador,
          localizacao: item.localizacao,
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
