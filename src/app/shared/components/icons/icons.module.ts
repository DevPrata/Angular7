import { NgModule } from '@angular/core';
 
import { FeatherModule } from 'angular-feather';
import { ChevronRight,ChevronLeft,Maximize2,Repeat,Edit,Trash } from 'angular-feather/icons';
import { MatIconModule } from "@angular/material/icon";

const icons = {
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Repeat,
  Edit,
  Trash
};
 
@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule,
    MatIconModule
  ]
})
export class IconsModule { }