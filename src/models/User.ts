import { UserProps } from '../types/UserProps';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Callback } from '../types/Function';



const URL = 'http://localhost:3000'

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(URL);
  public attributes: Attributes<UserProps>;

  constructor (props: UserProps) {
    this.attributes = new Attributes(props);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}