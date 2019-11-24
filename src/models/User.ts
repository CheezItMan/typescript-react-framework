import { UserProps } from '../types/UserProps';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Callback } from '../types/Function';
import { AxiosResponse } from 'axios';
import { Model } from './Model';



const URL = 'http://localhost:3000'

export class User extends Model {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(URL);
  public attributes: Attributes<UserProps>;

  constructor (props: UserProps) {
    super();
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

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    if (!id) {
      throw new Error('Cannot fetch without an ID');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      const { data } = response;
      this.set(data);
    });
  }

  save = () => {
    const data = this.attributes.getAll();
    this.sync.save(data)
      .then((response: AxiosResponse): void => {
        this.trigger('saved');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}