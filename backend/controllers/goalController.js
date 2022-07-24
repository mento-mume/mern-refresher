const { errorHandler } = require("../middleware/errorMiddleware")
const asyncHandler =require("express-async-handler")
const Goal = require('../models/goalModel')
const User = require('../models/userModels')
//@desc Get Goals
//@route GET /api/goals
//@access private

const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find({user:req.user.id})
    res.status(200).json(goals)

})

//@desc Set Goals
//@route POST /api/goals
//@access private

const setGoal = asyncHandler(async (req, res) =>{

if(!req.body.text)   
    {
         res.status(400)
    throw new Error('please add text')
    }
    const goal = await Goal.create({
        text: req.body.text, 
        user:req.user.id   
    })

    res.status(200).json(goal)
})

//@desc Update Goal
//@route PUT /api/goals
//@access private

const updateGoal = asyncHandler(async (req, res) =>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    //check for user
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('user not found')
    }

    //make sure logged in user matches user goal
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true,})
    res.status(200).json(updatedGoal)
})

//@desc Delete Goals
//@route DELETE /api/goals
//@access private

const deleteGoal = asyncHandler(async (req, res) =>{

    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error ('Goal not found')
    }

        //check for user
        const user = await User.findById(req.user.id)

        if(!user){
            res.status(401)
            throw new Error('user not found')
        }
    
        //make sure logged in user matches user goal
        if(goal.user.toString() !== user.id){
            res.status(401)
            throw new Error('User not Authorized')
        }
    
   await goal.remove()
    res.status(200).json({id:req.params.id})
})

module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} 