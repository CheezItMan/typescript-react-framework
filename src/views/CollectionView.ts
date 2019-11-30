import { Model } from '../models/Model';
import { Collection } from '../models/Collection'

export abstract class CollectionView<T extends Collection<K, V>, K, V> {
  constructor (public collection: T, public parentElement: Element) { 
    collection.on('change', this.render);
    collection.on('change', () => {
      console.log('changed');
    });
  }

  abstract renderItem(model: K, itemParent: Element): void;

  render = (): void => {
    this.parentElement.innerHTML = '';
    const ul = document.createElement('ul');
    this.collection.models.forEach((model: K): void => {
      const itemParent: Element = document.createElement('li')
      this.renderItem(model, itemParent);
      ul.append(itemParent);
    });
    this.parentElement.append(ul);
  }
}