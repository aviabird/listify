import { NgModule } from '@angular/core';

import { LinkifyPipe } from './linkify';

export const PIPES = [
  LinkifyPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }