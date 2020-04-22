import { Component, OnInit, Input } from '@angular/core';

interface NavBarItems {
  text:string;
  link?:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('page-title') pageTitle: string;
  @Input() items: Array<NavBarItems> = [];


  constructor() { }

  ngOnInit(): void {
  }

}
