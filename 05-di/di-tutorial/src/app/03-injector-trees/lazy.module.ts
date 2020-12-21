import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseDirectiveComponent } from './use-directive.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UseDirectiveComponent],
  imports: [
    CommonModule ,
    RouterModule.forChild([
      {path: '', component: UseDirectiveComponent}
    ]),
    HttpClientModule
  ],
  exports: [ UseDirectiveComponent ],
  providers: [],
})
export class LazyModule {}
// {LazyModule: class LazyModule}
