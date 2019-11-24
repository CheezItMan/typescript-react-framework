import axios from 'axios';
import { User } from './models/User';

const u = new User({
  name: 'Ada',
  age: 27,
});

u.on('saved', () => {
  console.log('Willy was saved');
});

u.on('error', () => {
  console.log('there was an error');
});

u.save();