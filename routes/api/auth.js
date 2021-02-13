//auth file

const express = require('express')
const router = express.Router()
const bcript = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const authMW = require('../../middleware/authMW')



router.get('/user', authMW, (request, response) => {
    User.findById(request.user.id)
    .select('-password')
    .then(user => response.json(user))
})


router.post('/', (request, response) => {

    const { email, password} =  request.body

    //simple validation
    if( !email || !password ){
        return response.status(400).json({message: 'Please enter all fields'})
    }

    //check for existing user
    User.findOne({ email:email })
        .then(user => {
            if(!user) return response.status(400).json({ message: 'User does not exist'})

            //validate password
            bcript.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return response.status(400).json({message: "Invalid credentials"})

                jwt.sign(
                    {id: user.id},
                    config.get('jwtSecret'),
                    { expiresIn: 3600 }, //determine the expires time
                    (err, token) => {
                        if(err) throw err;
                        response.json({
                            token: token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    }
                )  
            })


        })

})

module.exports = router