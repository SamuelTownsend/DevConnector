/* In summary, this file defines a Mongoose schema for a user, specifying the structure and constraints of user documents. It exports a Mongoose model named 'User' based on this schema, providing a convenient way to interact with user data in a MongoDB database. Developers can use this model to perform operations such as creating, querying, updating, and deleting user documents in the associated MongoDB collection. */


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);