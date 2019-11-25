
import { AxiosResponse } from 'axios';

import { ModelAttributes } from '../types/ModelAttributes';
import { Sync } from '../types/Sync';
import { Events } from '../types/Events';
import { HasId } from '../types/HasId';




export class Model<T extends HasId> {
  constructor (
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>

  ) { }

  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;

  set = this.attributes.set;

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