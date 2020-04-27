import { Component, OnInit, Input } from '@angular/core';

interface NavBarItems {
  icone:string;
  conteudo?:Object;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('page-title') pageTitle: string;
  @Input() items: Array<NavBarItems> = [];

  menuIsOpen = false


  constructor() { 
    document.body.style.paddingLeft = '70px'
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    document.body.style.paddingLeft = "0px";
  }


  toggleMenu(){
    this.menuIsOpen = !this.menuIsOpen;
  }

}
