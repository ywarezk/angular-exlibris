import { isPlatformBrowser } from '@angular/common';
import { Compiler, Component, Inject, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-name',
  template: `
    <div #container></div>
  `,
})
export class AnimationComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  viewContainer: ViewContainerRef;

  constructor(
    private _compiler: Compiler,
    @Inject(PLATFORM_ID) private _platform
  ) { }

  async ngOnInit() {
    if (isPlatformBrowser(this._platform)) {
      const { LottieModule } = await import('ngx-lottie');
      const moduleWithComponentFactories = await this._compiler.compileModuleAndAllComponentsAsync(LottieModule);
      const componentFactory = moduleWithComponentFactories.componentFactories.find((componentFactory) => componentFactory.selector === 'ng-lottie');
      this.viewContainer.createComponent(componentFactory);
    }



  }

}
