import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from "./auth/interceptor.module";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RouterModule } from "@angular/router";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from '../in-memory-database';

import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    InterceptorModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover isso quando tiver backend externo
  ],
  exports:[
    // Modulos compartilhados
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Componentes compartilhados
    NavbarComponent
  ]
})
export class CoreModule { }
