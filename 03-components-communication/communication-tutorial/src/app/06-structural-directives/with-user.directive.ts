

import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User, UserService } from './user.service';

@Directive({
  selector: '[withUser]',
})
export class WithUserDirective implements OnInit {

  constructor(
    private _template: TemplateRef<{ $implicit: User}>,
    private _userService: UserService,
    private _container: ViewContainerRef
  ) {

  }

  ngOnInit() {
    this._userService.user$.subscribe((user) => {
      if (user) {
        this._container.createEmbeddedView(this._template, {$implicit: user})
      }
    })
  }
}
