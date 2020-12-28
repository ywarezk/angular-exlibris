import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserOnlyService } from './05-shim/browser-only.service';
import { BrowserOnlyShimService } from './05-shim/browser-only-shim.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: BrowserOnlyService,
      useClass: BrowserOnlyShimService
    }
  ]
})
export class AppServerModule {}
