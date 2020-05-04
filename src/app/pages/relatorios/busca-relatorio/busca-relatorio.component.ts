import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-relatorio',
  templateUrl: './busca-relatorio.component.html',
  styleUrls: ['./busca-relatorio.component.scss']
})
export class BuscaRelatorioComponent implements OnInit {

  abrirLista: boolean = false

  items = [
    'Relatório 1',
    'Relatório 2',
    'Relatório 3',
    'Relatório 4',
    'Relatório 5'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
