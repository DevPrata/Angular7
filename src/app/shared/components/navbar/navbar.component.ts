import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

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
    document.body.style.paddingLeft = '120px'
    document.body.style.paddingRight = '50px'
    document.body.style.paddingTop = '54px'

    document.body.style.backgroundColor = '#F4F4F4'

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
