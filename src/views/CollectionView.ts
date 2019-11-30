import { Model } from '../models/Model';
import { Collection } from '../models/Collection'

export abstract class CollectionView<T extends Collection<K, V>, K, V> {
  constructor (public collection: T, public parentElement: DocumentFragment) { }

  abstract renderItem(model: K, itemParent: Element): void;

  render(): void {
    this.collection.models.forEach((model: K): void => {
      this.renderItem(model, this.parentElement);
    });
  }
}