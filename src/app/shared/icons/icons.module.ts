import { NgModule } from '@angular/core';
 
import { FeatherModule } from 'angular-feather';
import { ChevronRight,ChevronLeft,Maximize2,Repeat } from 'angular-feather/icons';

const icons = {
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Repeat
};
 
@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }