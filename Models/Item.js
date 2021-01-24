const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create our Schema
const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

//export the models, mongoose.model(name, schema const)
module.exports = Item = mongoose.model('item', ItemSchema)