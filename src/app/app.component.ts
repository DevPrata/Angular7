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
  

  ngOnInit(){
  }
}
