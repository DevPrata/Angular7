import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from "./auth/interceptor.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RouterModule } from "@angular/router";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from '../in-memory-database';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    InterceptorModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover isso quando tiver backend externo
  ],
  exports:[
    // Modulos compartilhados
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
