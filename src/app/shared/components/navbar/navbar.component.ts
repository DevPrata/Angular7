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
  menuIsOpen = false
  currentRoute = "string"


  constructor(private router: Router) { 
    this.currentRouter()
    document.body.style.paddingLeft = '120px'
    document.body.style.paddingRight = '50px'
    document.body.style.paddingTop = '54px'

    document.body.style.backgroundColor = '#F4F4F4'

  }

  ngOnInit(): void {
  }

  currentRouter(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)  
    ).subscribe((event: NavigationStart) => {
      this.currentRoute = event.url
    });
  }

  toggleMenu(){
    this.menuIsOpen = !this.menuIsOpen;
  }

}
