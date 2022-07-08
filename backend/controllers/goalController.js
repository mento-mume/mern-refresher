//@desc Get Goals
//@route GET /api/goals
//@access private

const getGoals = (req, res) =>{
    res.status(200).json({message:'Get goals'})
}

//@desc Set Goals
//@route POST /api/goals
//@access private

const setGoal = (req, res) =>{
    res.status(200).json({message:'Set goals'})
}

//@desc Update Goal
//@route PUT /api/goals
//@access private

const updateGoal = (req, res) =>{
    res.status(200).json({message:`Update goals ${req.params.id}`})
}

//@desc Delete Goals
//@route DELETE /api/goals
//@access private

const deleteGoal = (req, res) =>{
    res.status(200).json({message:`delete goals ${req.params.id}`})
}

module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} 