import { NgModule } from '@angular/core';
 
import { FeatherModule } from 'angular-feather';
import { ChevronRight,ChevronLeft } from 'angular-feather/icons';
 
// Select some icons (use an object, not an array)
const icons = {
  ChevronRight,
  ChevronLeft
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