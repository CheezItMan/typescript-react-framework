import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();
  console.log('User Edit')
} else {
  throw new Error('Root element not found');
}