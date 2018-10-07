import { Meteor } from "meteor/meteor";
import SimpleSchema from 'simpl-schema';

const UserSchema = new SimpleSchema({
    username: String,
    email: String,
    profile: new SimpleSchema({
        firstName: String,
        lastName: String,   
        km: String,
        favoritePlaces: Array,
        visited: Array,
        pictures: Array
    }, { requiredByDefault: false })
}, { requiredByDefault: false });

Meteor.users.attachSchema(UserSchema);

export default UserSchema;

// Meteor.users.find({ _id: Meteor.userId() }, { fields: { contacts: 1 } }).fetch()
