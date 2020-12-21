import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeLazyComponent } from './some-lazy.component';

@NgModule({
  declarations: [SomeLazyComponent],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class AnotherLazyModule {}
