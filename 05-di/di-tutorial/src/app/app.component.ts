import { Compiler, Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'di-tutorial';

  @ViewChild('lazyContainer', {read: ViewContainerRef})
  viewContainer: ViewContainerRef;

  constructor(
    @Inject('hello') public message: string,
    private _compiler: Compiler
  ) {}

  async lazyLoad() {
    const moduleFile = await import('./08-another-lazy-loading/another-lazy.module')
    const myLazyModule = moduleFile.AnotherLazyModule;
    const moduleWithFactories = await this._compiler.compileModuleAndAllComponentsAsync(myLazyModule);
    const componentFactory = moduleWithFactories.componentFactories.find((factory) => factory.selector === 'app-some-lazy');
    this.viewContainer.createComponent(componentFactory);
  }
}
