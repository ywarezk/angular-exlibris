import { AuthenticateStrategy } from './authenticate-strategy';

export class PilgetStrategy extends AuthenticateStrategy {
  validate(dogName: string): boolean {
    if (dogName === 'pigletshvily') {
      return true;
    } else {
      return false
    }
  }
}
