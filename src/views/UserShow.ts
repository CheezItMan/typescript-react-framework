import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../types/UserProps';

export class UserShow extends View<User, UserProps> {

  template = (): string {
    return `
      <div>
        <h1>User Details</h1>
        <div>
          <h3>User Name: ${this.model.get('name')}</h3>
          <h3>User Age: ${this.model.get('age')}</h3>
        </div>
      </div>
    `;
  }
}