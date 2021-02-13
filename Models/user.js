const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create our Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    register_date:{
        type: Date,
        default: Date.now
    }
});

//export the models, mongoose.model(name, schema const)
module.exports = User = mongoose.model('user', UserSchema)