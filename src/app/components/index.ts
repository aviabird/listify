import { NgModule } from '@angular/core';
import { FacebookLoginComponent } from './facebooklogin.component';

export const COMPONENTS = [
  FacebookLoginComponent
];


@NgModule({
  imports: [
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }