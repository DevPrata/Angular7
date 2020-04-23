import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { InterceptorModule } from "./auth/interceptor.module";

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
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
