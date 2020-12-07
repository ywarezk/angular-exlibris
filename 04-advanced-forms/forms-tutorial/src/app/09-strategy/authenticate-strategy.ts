import { InjectionToken } from '@angular/core';



export const AUTHENTICATE = new InjectionToken<AuthenticateStrategy>('register a strategy');

export abstract class AuthenticateStrategy {
  abstract validate(data: any): boolean;
}
