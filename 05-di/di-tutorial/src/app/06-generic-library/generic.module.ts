import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { GENERIC_CONFIG } from './token';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    ApiService
  ],
})
export class GenericModule {
  static create(url: string): ModuleWithProviders<GenericModule> {

    return {
      ngModule: GenericModule,
      providers: [
        {
          provide: GENERIC_CONFIG,
          useValue: url
        }
      ]
    }

  }
}
