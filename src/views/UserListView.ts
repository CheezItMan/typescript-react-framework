import { CollectionView } from './CollectionView';
import { Collection } from '../models/Collection';
import { UserShow } from './UserShow'
import { User } from '../models/User';
import { UserProps } from '../types/UserProps';

export class UserListView extends CollectionView<Collection<User, UserProps>, User, UserProps> {

  renderItem(model: User, itemParent: Element) {
    const view = new UserShow(itemParent, model);
    view.render();
  }
}