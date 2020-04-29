import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent  implements OnInit{
  title = 'projeto-angular-base';
  currentPage: string = "";

  constructor(private router:Router) {
  }
  


  currentNavBar() {
    return this.navbarItems
  }

  ngOnInit(){
    this.currentRouter()
  }

  currentRouter(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)  
    ).subscribe((event: NavigationStart) => {
      this.currentPage = event.url
    });
  }
  

  navbarItems = [ 
    { 
      icone:'account_box',
      currentPage: 'usuario', 
      conteudo: { 
        texto: 'GESTÃO DE USUÁRIOS', 
        itens: [ 
          { 
            icone: 'account_circle', 
            texto: 'Usuários', 
            link: 'usuario'
          },
          { 
            icone: 'dns', 
            texto: 'Perfis'
          } 
        ]
      } 
    }, 
    { 
      icone:'insert_chart' , 
      currentPage: 'log-acesso',
      conteudo: { 
        texto: 'LOGS DE ATIVIDADES', 
        itens: [ 
          { 
            icone: 'dns', 
            texto: 'Logs de acesso', 
            link:'log-acesso'
          },
          { 
            icone: 'dns', 
            texto: 'Logs de relatorios',
            link:'log-relatorio'
          } 
        ] 
      } 
    } 
  ]
}
