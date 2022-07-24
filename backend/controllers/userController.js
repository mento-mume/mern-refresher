const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User =require('../models/userModels')

//@desc Get Users
//@route Post /api/users
//@access public
const registerUser = asyncHandler(async(req,res) =>{
const {name, email, password} = req.body

if(!name || !email || !password){
    res.status(400)
    throw new Error('please add all fields')
}

//check if user exist
const userExist = await User.findOne({email})
if(userExist){
    throw new Error('user already exist')
}

// hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

// create user
const user = await User.create({
    name, 
    email,
    password: hashedPassword
})
//check if user creation was succesful
if (user){
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id)
    })
}else{
    res.status(400)
    throw new Error('Invalid User Data')
}
})

//@desc Authenticate User
//@route Post /api/users/login
//@access public
const loginUser =asyncHandler(async(req,res) =>{
    //bring in data from req
    const {email, password} = req.body

    //check email
    const user = await User.findOne({email})


    //compare login credentials
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    }else{
        res.status(400)
    throw new Error('Invalid login credentials')
    }
})

//@desc Get User data
//@route GET /api/users/me 
//@access public
const getMe =asyncHandler(async(req,res) =>{
      
 const {_id,name, email} = await User.findById(req.user.id)

 res.status(201).json({
    id:_id,
    name,
    email,
 })

})

 //generate jwt token

 const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
}