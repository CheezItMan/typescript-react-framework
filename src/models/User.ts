import { UserProps } from '../types/UserProps';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection'


const URL = 'http://localhost:3000'

export class User extends Model<UserProps> { 
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync<UserProps>(URL)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      User.buildUser
    );
  }

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}