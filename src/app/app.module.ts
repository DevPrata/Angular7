import { NgModule } from '@angular/core';

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./shared/core/core.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
