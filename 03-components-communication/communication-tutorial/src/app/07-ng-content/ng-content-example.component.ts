/**

<app-ng-content-example>
  <div>
    <h1>hello world</h1>
  </div>

  <ng-template #stam>
    <div>
      <h1>hello world</h1>
    </div>
  </ng-template>
</app-ng-content-example>

 */

import { AfterContentChecked, AfterContentInit, Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  template: `
    <h1>ng-content</h1>

    <ng-content></ng-content>

    <!--

      <ng-content select="mat-card-header"></ng-content>
     -->

  `,
})
export class NgContentExampleComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('stam')
  stam : TemplateRef<void>;

  /**
   * jumps once
   * used for init that we need to do after the content is project
   * used for init that uses @ContentChild
   */
  ngAfterContentInit() {

  }

  /**
   * jumps every cd
   * used for actions that should happen after content projected is updated
   */
  ngAfterContentChecked() {

  }

}
