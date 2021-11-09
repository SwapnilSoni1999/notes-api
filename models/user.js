const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: { type: String, required: true, trim: true, unique: true, index: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

const UserModel = model('User', UserSchema, 'users')

module.exports = UserModel
