import axios from 'axios';
import { User } from './models/User';

const u = User.buildUser({
  id: 1,
});

u.on('change', (): void => {
  console.log('changed');
  console.log(u);
 
});

u.fetch();
