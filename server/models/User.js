const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    gender: String,
    race: String,
    age: Number,
    googleID: String,
    twitterID: String,
    facebookID: String
});

mongoose.model('users', userSchema);