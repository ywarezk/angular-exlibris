import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DataStrategy, DATA_STRATEGY } from './data.strategy';

interface DataModuleConfig {
  DataService: DataStrategy
}

@NgModule({
  declarations: [TableComponent],
  imports: [ CommonModule ],
  exports: [TableComponent],
  providers: [],
})
export class DataModule {
  static create(config: DataModuleConfig): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [
        { provide: DATA_STRATEGY, useClass: config.DataService}
      ]
    }
  }
}
