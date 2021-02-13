const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const config = require('config')

//bring the itens path
const items = require('./routes/api/items')
const users = require('./routes/api/users')

const app = express();

//Middleware que substitiu o body parser e que lê o json no body do post
app.use(express.json());

//Config of DB
//import the keyconfig and link to the mongoURL
const db = config.get('mongoURL');

//use that key to connect in mongoose
//o retorno é uma promise, and you can send a console back to visualize the feedback
mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true})
    .then( () => console.log('MongoDB is connected ...'))
    .catch( (err) => console.log(err) );

//redirect the request to routes
app.use('/api/items', items)
app.use('/api/users', users)

//serve the static assets
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))

    app.get('*', (request, response) => 
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

//config the port that server will use. The enviroment port or 5000
const port = process.env.PORT || 5000;

//rodar o servidor
app.listen(port, () => console.log(`The server is running on port ${port}...`));