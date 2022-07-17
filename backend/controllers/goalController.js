const { errorHandler } = require("../middleware/errorMiddleware")

const asyncHandler =require("express-async-handler")

//@desc Get Goals
//@route GET /api/goals
//@access private

const getGoals = asyncHandler(async (req, res) =>{
    res.status(200).json({message:'Get goals'})
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

    res.status(200).json({message:'Set goals'})
})

//@desc Update Goal
//@route PUT /api/goals
//@access private

const updateGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({message:`Update goals ${req.params.id}`})
})

//@desc Delete Goals
//@route DELETE /api/goals
//@access private

const deleteGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({message:`delete goals ${req.params.id}`})
})

module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} 