const config = require('config')
const jwt = require('jsonwebtoken')

function authMW (request, response, next){

    const token = request.header('x-auth-token')

    //check for the token
    if(!token){
        response.status(401).json({message: "No token authorization denied"})    
    }
    
    try{
        
            //verify token
            const decoded = jwt.verify(token, config.get("jwtSecret"))
            request.user = decoded;
            next();

    }catch(e){
        response.status(400).json({message: "Token is not valid"})
    }

}

module.exports = authMW;