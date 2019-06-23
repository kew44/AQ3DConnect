const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 uname: {
     type: String
 },
 psw: {
     type: String
 }
}, { versionKey: false });
UserSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('Users', USerSchema);

module.exports = Items;