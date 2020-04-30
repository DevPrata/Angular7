import { Component, OnInit, Input } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'

interface NavBarItems {
  icone:string;
  conteudo?:Object;
  currentPage?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{


  
  @Input('page-title') pageTitle: string;
  @Input() items: Array<NavBarItems> = [];

  constructor() { 

    document.body.style.backgroundColor = '#F4F4F4'

  }

  ngOnInit(): void {
  }


}
