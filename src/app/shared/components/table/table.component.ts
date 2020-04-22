// ng g c shared/components/bread-crumb
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Cabecalho {
  texto:string,
  icone?:string,
  campoOrdenacao?:string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() itensPorPagina: Array<String> = ['05','10'];
  @Input() qtResultados: number = 0;
  @Input('pagina') paginaAtual: number = 0;
  @Input() qtPaginas: number = 0;
  @Input() utilizarOrdenacao: boolean = false;
  @Input() ordem: string = 'asc';
  @Input() cabecalho: Array<Cabecalho> = [];
  @Input() rows: Array<[]> = [];
  @Input() icones: Array<[]> = []

  @Output()
  ordena: EventEmitter<Object> = new EventEmitter<Object>();

  @Output('troca-pagina')
  trocaPaginaEvent: EventEmitter<Object> = new EventEmitter<Object>();

  @Output('troca-elemento-pagina')
  trocarElementoEvent: EventEmitter<String> = new EventEmitter<String>();

  @Output('acao-icone')
  acaoIconeEvent: EventEmitter<Object> = new EventEmitter<Object>();

  itemSelecionado = '5'
  selectAll = false
  selected = []
  mostrarBotao = false
  hoverIndex = -1

  constructor() { }

  ngOnInit(): void {
  }

  mostrandoLength() {
    return this.rows.length < 10 ? `0${this.rows.length}` : this.rows.length
  }

  rowsLength() {
    return this.qtResultados < 10 ? `0${this.qtResultados}` : this.qtResultados
  }

  numeroPaginas() {
    let paginas = []
    let index = this.paginaAtual
    if (this.qtPaginas === 0) return [1]

    if (this.qtPaginas === 1) {
      paginas = [index]
    } else if (index === 1 && this.qtPaginas === 2) {
      paginas = [index, index + 1]
    } else if (index > 1 && this.qtPaginas === 2) {
      paginas = [index - 1, index]
    } else if (index > 0 && index + 1 < this.qtPaginas) {
      paginas = [index, index + 1, index + 2]
    } else if (!(index === this.qtPaginas) && this.qtPaginas - index < 2) {
      paginas = [index - 1, index, index + 1]
    } else {
      paginas = [index - 2, index - 1, index]
    }

    return paginas
  }

  ordenaTabela(index) {
    if (this.cabecalho[index].hasOwnProperty('icone') && this.utilizarOrdenacao) {
      let ordenacao = this.ordem === 'asc' ? 'desc' : 'asc'
      this.ordena.emit({ index: index, ordem: ordenacao, campoOrdenacao:this.campoOrdenacaoDoCabecalho(index) })
    }
  }

  trocaPagina(pagina) {
    if (this.paginaAtual !== pagina) {
      this.paginaAtual = pagina
      this.trocaPaginaEvent.emit({ pagina: this.paginaAtual, itensPorPagina: this.itemSelecionado })
    }
  }

  campoOrdenacaoDoCabecalho(index){
    if(this.cabecalho[index].hasOwnProperty('campoOrdenacao')){
        return this.cabecalho[index].campoOrdenacao
    }else{
        return null
    }
  }

  selecionarItem(eventValue) {
    this.itemSelecionado = eventValue
    this.selectAll = false
    this.selected = []
    this.paginaAtual = 1
    this.trocarElementoEvent.emit(this.itemSelecionado)
  }

  acaoIcone(index,iconeIndex){
    this.acaoIconeEvent.emit( { index: index, acao: iconeIndex } )
  }

  hoverRow(index) {
    this.mostrarBotao = true
    this.hoverIndex = index
  }
  
  downRow() {
    this.hoverIndex = -100
    this.mostrarBotao = false
  }

}
