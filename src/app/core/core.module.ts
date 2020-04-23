import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { InterceptorModule } from "./auth/interceptor.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    InterceptorModule,
  ],
  exports:[
    // Modulos compartilhados
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
