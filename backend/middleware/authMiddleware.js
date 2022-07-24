const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')

const protect =asyncHandler(async (req,res,next)=>{
    //initilize token
    let token

    if(req.headers.authorization 
        && req.headers.authorization.startsWith('Bearer')){
            try {
                //get token from header
                token = req.headers.authorization.split(' ')[1]

                //verify 
                const decoded = jwt.verify(token,process.env.JWT_SECRET)

                //get the user from token
                req.user = await User.findById(decoded.id).select('-password')
                next()
            } catch (error) {
                console.log(error)
                res.status(401)
                throw new Error('Not Authorized')
            }
        }
        if (!token){
            res.status(401)
            throw new Error('Not Authorized, provide token')
        }
})

module.exports = {protect}