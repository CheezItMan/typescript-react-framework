import { User } from './models/User';

const u = new User({
  name: 'Bob',
  age: 20,
});

u.on('dufus', () => { console.log('doh') });
u.on('dufus', () => { console.log('arg') });
u.on('somethin', () => { console.log('doh') });



console.log(u);
u.trigger('dufus')