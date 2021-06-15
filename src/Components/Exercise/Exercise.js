import React, {useState} from 'react';
import "./Exercise.css"
import axios from 'axios'

const Exercise = (props) => {

    const [setList, setSetList] = useState(props.data.sets)


    function addSet(){


       // console.log(props.data);

        let addSetPostObject = {
           workoutID: props.workoutData._id,
           name:props.userData.name,
           newSet: {reps: 20, weight: 225},
           exerciseID:props.data.ID

        }
        axios.post(props.connection + '/user/addSet', addSetPostObject).then((res) => {
           // console.log(res)
            setSetList(res.data.sets)
        })

        let theSetList = setList;
        theSetList.push({reps: 20, weight: 225})


        updateExerciseStats(theSetList)

    }

    function deleteSet(){

    }



    function updateExerciseStats(setList){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        console.log("TODAY" + today);



        let updateStatsPostObject = {

            name:props.userData.name,
            exerciseInfo: {
            exerciseName: props.data.name,
            sets: setList, 
            date: today
            }
            

        }



        axios.post(props.connection + '/user/updateStats', updateStatsPostObject).then((res) => {
            console.log('STATS');
            console.log(res)
        })



    }


    function deleteExercise(){


        let postObject = {
            workoutID: props.workoutData._id,
           name:props.userData.name,
           exerciseID:props.data.ID
        }

        axios.post(props.connection + '/user/deleteExercise', postObject).then((res) => {
            console.log(res)
        })
    }


    return ( <div className="exercise-container">
       <div className="exercise-name">{props.data.name}</div>
       <div className="categories-container">categories</div>
       <div className="sets-list-container">
           {setList.map((set) => <div className="set-block center-y">{set.reps} x {set.weight}</div>)}
           <button className="add-set-button center-y" onClick={addSet}>+</button>
       </div>
       <button className="delete-exercise-button" onClick={deleteExercise}>X</button>
    </div> );
}
 
export default Exercise;