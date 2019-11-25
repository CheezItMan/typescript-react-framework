import axios, { AxiosResponse } from 'axios';

import { UserProps } from '../types/UserProps';
import { User } from './User';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor (
    public rootUrl: string,
    public deserialize: (json: K) => T
  ) { }
  

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse): void => {
        response.data.forEach((modelProps: K) => {
          const model = this.deserialize(modelProps);
          this.models.push(model);
        });
        this.trigger('change');
      });
  }
}