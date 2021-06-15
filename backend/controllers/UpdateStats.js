//const Workout = require('../Models/UserModel')
const { Mongoose } = require('mongoose')
const User = require('../Models/UserModel')
const Workout = require('../Models/UserModel')


const updateStats = async (req,res,data) =>{

let workouts;

User.findOne({name:req.body.name}).then( (user) => {


   let exerciseStats = user.exerciseStats;
   

    let i;
    if(exerciseStats.length === 0){
        exerciseStats.push(req.body.exerciseInfo)
    }

    else{
        for(i = 0; i <= exerciseStats.length; i++){
            console.log(exerciseStats[i])
            if(exerciseStats[i].name != req.body.exerciseInfo.exerciseName){
                exerciseStats.push(req.body.exerciseInfo)
            }
        }
    }
    

    


    User.updateOne({name: req.body.name},{exerciseStats:exerciseStats}).then( err => {console.log(err)})


   res.json(user.exerciseStats)

})

 


}


module.exports = {
   updateStats
}