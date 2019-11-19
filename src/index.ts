import { User } from './models/User';

const u = new User({
  name: 'Bob',
  age: 20,
});

console.log('Hiya');
console.log(`u.name = ${u.get('name')}`);
console.log(`u.age = ${u.get('age')}`);
u.set({ name: 'Cal' });

console.log(`u.name = ${u.get('name')}`);
console.log(`u.age = ${u.get('age')}`);
