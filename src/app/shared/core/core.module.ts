import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { InterceptorModule } from "./interceptor/interceptor.module";

import { InMemoryDatabase } from '../../in-memory-database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    InterceptorModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover isso quando tiver backend externo
  ],
  exports:[
    // Modulos compartilhados
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
