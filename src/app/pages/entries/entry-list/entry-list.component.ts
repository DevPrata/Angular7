import { Component, OnInit } from '@angular/core';

import { BaseResourceTabelaComponent } from "../../../shared/components/base-resource-tabela/base-resource-tabela.component";

import { EntryService } from '../shared/entry.service'
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent extends BaseResourceTabelaComponent<Entry> {

  cabecalho = [
    {
      texto: 'Lançamento',
      icone:'maximize-2'
    },
    {
      texto: 'Categoria',
      icone:'maximize-2'
    },
    {
      texto: 'Status',
    },
    {
      texto: 'Ações'
    }
  ]

  constructor(protected entryService: EntryService) {
    super(entryService)
  }


  protected montarTabela(objeto) {
    this.resources = []
    this.rows = []

    this.resources = objeto
    this.resources.forEach(item => {
      this.rows.push(
        {
          nome: item.name,
          amount: item.amount,
          papeis: item.paidText,
        }
      )
    })
    this.pagina = 1
    this.qtPaginas = 5
    this.qtResultados = 15
  }


}
