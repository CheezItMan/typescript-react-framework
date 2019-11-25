
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

  fetch = this.sync.fetch;

  save = this.sync.save;

}