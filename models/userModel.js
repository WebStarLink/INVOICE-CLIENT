const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    activationSuccessful: {type: Boolean, default: false},
    activationLink: {type: String},
    profile: {
        legal: {type: String},
        itn: {type: String}
    }
})


module.exports = model ("User", UserSchema)