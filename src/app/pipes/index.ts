import { MentionsPipe } from './mentions';
import { NgModule } from '@angular/core';

import { LinkifyPipe } from './linkify';
import { CapitalizePipe } from './capitalize';
import { StringifyPipe } from './stringify';

export const PIPES = [
  LinkifyPipe,
  CapitalizePipe,
  StringifyPipe,
  MentionsPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }