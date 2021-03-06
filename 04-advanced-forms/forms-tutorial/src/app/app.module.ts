import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './01-template-driven-example/template-driven.component';
import { ReactiveExampleComponent } from './02-reactive-example/reactive-example.component';
import { PigletDirective } from './04-custom-validation/piglet.directive';
// import { TemplateDrivenValidationComponent } from './03-validations/reactive-validation.component';
import { TemplateDrivenValidationComponent } from './03-validations/template-driven-validation.component';
import { AsyncValidateFormComponent } from './05-async-validation/async-validate-form.component';
import { CreditCardDirective } from './05-async-validation/credit-card.directive';
import { SimpleFormComponent } from './06-custom-form-control/simple-form.component';
import { InputCreditCardDirective } from './06-custom-form-control/input-credit-card.directive';
import { DynamicFormComponent } from './07-dynamic-forms/dynamic-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AutoCreateFormComponent } from './08-auto-create-form/auto-create-form.component';
import { AUTHENTICATE } from './09-strategy/authenticate-strategy';
import { PilgetStrategy } from './09-strategy/piglet.strategy';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveExampleComponent,
    PigletDirective,
    TemplateDrivenValidationComponent,
    AsyncValidateFormComponent,
    CreditCardDirective,
    SimpleFormComponent,
    InputCreditCardDirective,
    DynamicFormComponent,
    AutoCreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule
  ],
  providers: [
    {
      provide: AUTHENTICATE,
      useClass: PilgetStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
