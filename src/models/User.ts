import { UserProps } from '../types/UserProps';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';


const URL = 'http://localhost:3000'

export class User extends Model<UserProps> { 
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync<UserProps>(URL)
    );
  }
}