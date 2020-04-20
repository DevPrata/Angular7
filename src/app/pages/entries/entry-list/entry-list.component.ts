import { Component, OnInit } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";

import { EntryService } from '../shared/entry.service'
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

  cabecalho = [
    {
      texto: 'Lançamento',
    },
    {
      texto: 'Categoria',
    },
    {
      texto: 'Valor R$',
    },
    {
      texto: 'Ações'
    }
  ]

  pagina = 1
  qtPaginas = 1
  qtResultados = 0

  rows = []
  lista:Entry[] = []

  ngOnInit(): void {
    this.entryService.getAll().subscribe(
      resources => this.lista = resources,
      error => alert('Erro ao carregar a lista'),
      () => this.montarTabela(this.lista)
    )
  }


  constructor(protected entryService: EntryService) {
    super(entryService)
  }

  montarTabela(objeto) {
    this.lista = []
    this.rows = []

    this.lista = objeto
    this.lista.forEach(item => {
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
