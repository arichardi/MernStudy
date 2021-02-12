const express = require('express')
const router = express.Router()
const bcript = require('bcryptjs')

//import the models
const User = require('../../Models/user')

router.get('/', (request, response) => {
    response.send('Register')
})

router.post('/', (request, response) => {
    const { name, email, password} =  request.body

    //simple validation
    if( !name || !email || !password ){
        return response.status(400).json({message: 'Please enter all fields'})
    }

    //check for existing user
    User.findOne({ email:email })
        .then(user => {
            if(user) return response.status(400).json({ message: 'User already exists'})

            const newUser = new User({
                name,
                email, 
                password
            });

            //create Salt and Hash
            bcript.genSalt(10, (error, salt) => {
                 return bcript.hash(newUser.password, salt, (error, hash) => {
                     if (error) throw error;
                     newUser.password = hash;
                     newUser.save()
                     .then(user => {
                         response.json({
                             user: {
                                 id: user.id,
                                 name: user.name,
                                 email: user.email
                             }
                         })
                     })
                 })
            })

        })

})

//export modules
module.exports = router

