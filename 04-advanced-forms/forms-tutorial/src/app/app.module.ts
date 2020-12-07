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
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
