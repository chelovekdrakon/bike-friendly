import { Meteor } from 'meteor/meteor';

import { createUser } from './methods';

Meteor.methods({
  'users.create': createUser,
});
