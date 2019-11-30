import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { Collection } from './models/Collection';
import { UserListView } from './views/UserListView';

const users = User.buildUserCollection();

const root = document.getElementById('root');

if (root) {
  const userViews = new UserListView(users, root)

  userViews.render();
  users.fetch();
} else {
  throw new Error('Root element not found');
}