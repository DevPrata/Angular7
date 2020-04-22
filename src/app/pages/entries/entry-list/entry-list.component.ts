import { Component, OnInit } from '@angular/core';

import { BaseResourceTabelaComponent } from "../../../shared/components/base-resource-tabela/base-resource-tabela.component";

import { EntryService } from '../shared/entry.service'
import { Entry } from '../shared/entry.model';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(protected entryService: EntryService, private router: Router,private route: ActivatedRoute) {
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

  acao(item){
    if(item.acao === 0){
      this.router.navigate([`${this.resources[item.index].id}/edit`], { relativeTo: this.route.parent });
    }else{
      this.deleteResource(this.resources[item.index].id)
    }
  }

  deleteResource(resource){
    const podeDeletar = confirm('Deseja realmente excluir este item? ')

    if(podeDeletar){
      this.entryService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter( element => element !== resource),
        () => alert('Erro ao tentar excluir')
      )
    }
  }


}
