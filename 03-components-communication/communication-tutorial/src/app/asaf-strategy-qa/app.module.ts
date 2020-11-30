import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA_STRATEGY } from './data.strategy';
import { MockService } from './mock.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [{
    provide: DATA_STRATEGY,
    useClass: MockService
  }],
})
export class FeatureModule {}
