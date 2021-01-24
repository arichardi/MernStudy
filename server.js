const express = require("express");
const mongoose = require('mongoose');

const items = require('./routes/api/items')

const app = express();

//Middleware que substitiu o body parser e que lê o json no body do post
app.use(express.json());

//Config of DB
//import the keyconfig and link to the mongoURL
const db = require('./config/keys').mongoURL;

//use that key to connect in mongoose
//o retorno é uma promise, and you can send a console back to visualize the feedback
mongoose
    .connect(db)
    .then( () => console.log('MongoDB is connected ...'))
    .catch( (err) => console.log(err) );

//config the port that server will use. The enviroment port or 5000
const port = process.env.PORT || 5000;

//rodar o servidor
app.listen(port, () => console.log(`The server is running on port ${port}...`));