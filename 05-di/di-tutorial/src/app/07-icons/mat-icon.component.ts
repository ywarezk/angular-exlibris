import { AfterViewInit, Compiler, Component, ContentChild, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// <mat-icon>home</mat-icon>
@Component({
  selector: 'mat-icon',
  template: `
    <div #container></div>
  `,

})
export class MatIconComponent implements AfterViewInit {
  @ViewChild('container')
  container: ViewContainerRef;

  constructor(private _compiler: Compiler) {}

  async ngAfterViewInit() {
    const moduleWithFactories = await this._compiler.compileModuleAndAllComponentsAsync(MatIconModule)
    const matIconFactory = moduleWithFactories.componentFactories.find((singleFactory) => singleFactory.selector === 'mat-icon');

    // load svg icon to the matIconFactory

    this.container.createComponent(matIconFactory);
  }

}
