import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { InterceptorModule } from "./interceptor/interceptor.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    InterceptorModule,
    BrowserModule
  ],
  exports:[
    // Modulos compartilhados
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
