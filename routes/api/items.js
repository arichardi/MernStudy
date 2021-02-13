const express = require('express');
const router = express.Router();

const authMW = require('../../middleware/authMW') 

//import the models
const Item = require('../../Models/Item');

//get request
router.get('/', (request, response) => {
     Item.find()
        .sort({ date: -1})
        .then( items => response.json(items))
})

//post
router.post('/', authMW, (request, response) => {
    //create a new item using the body of the post
    const newItem = new Item({
        name: request.body.name
    });
    //save the item in the DB
    newItem.save().then( (item) => response.json(item))
})

//Delete
router.delete('/:id',authMW, (request, response) => {
    //take the id from the address request, than remove the item
    //if there's an error, response with a error message
    Item.findById( request.params.id)
        .then( item => item.remove().then( response.json({message: 'Delete with success'})))
        .catch( err => response.status(404).json({ Error: "the register couldn't be deleted"}));
});

//export the router
module.exports = router;