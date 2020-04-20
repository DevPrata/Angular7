import { OnInit } from '@angular/core';

import { BaseResourceService } from "../../services/base-resource.service";
import { BaseResourceModel } from "../../models/base-resource.model";


export abstract class BaseResourceTabelaComponent <T extends BaseResourceModel> implements OnInit {

  resources: T[] = []
  rows = []
  
  pagina = 1
  qtPaginas = 1
  qtResultados = 0
  itensPorPagina = '05'
  campoOrdenado = ''
  ordem = 'asc'

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit(): void {
    this.paginar()
  }

  paginar(){
    this.resourceService.getAll().subscribe(
      resources => this.montarTabela(resources),
      error => alert('Erro ao carregar a lista'),
    )
  }

  trocaElementoPagina(item){
    this.pagina = 1
    this.itensPorPagina = item
    this.paginar()
  }

  trocaPagina(item){
    this.pagina = item.pagina
    this.itensPorPagina = item.itensPorPagina
    this.paginar()
  }

  ordenar(item){
    this.pagina = 1
    this.campoOrdenado = item.campoOrdenado
    this.ordem = item.ordem
    this.paginar()
  }

  protected abstract montarTabela (objeto): void;

}
