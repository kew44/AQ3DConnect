const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 uname: {
     type: String
 },
 psw: {
     type: String
 }
});
UserSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('Users', UserSchema);

module.exports = User;
