import React, {useState} from 'react';
import "./ExerciseMenu.css"
import exerciseData from "../../JSON Data/ExerciseList.json"
import ExerciseCategoryContainer from "../ExerciseCategoryContainer/ExcerciseCategoryContainer"
import axios from 'axios';
const ExerciseMenu = (props) => {


    const [selectedExercise,  setSelectedExercise] = useState('')
   

    function exerciseButtonStyle(){
        if(selectedExercise != ''){
            return('menu-add-exercise-button-selected')
        }
        else{
            return('menu-add-exercise-button-empty')
        }
    }
    function saveExercise(){
        let exerciseObject = {
            name: selectedExercise.name,
            ID: Math.floor(Math.random() * 10000),
            sets:[]
        }
        axios.post(props.connection + 'user/addExercise', {
            name:props.userData.name,
            newExercise: exerciseObject,
            workoutID: props.data._id
        }).then((res) => {


            let oldList = props.exercises;

            let newList = oldList;
            newList.push(exerciseObject)
            
            setSelectedExercise(exerciseObject)
            console.log(newList)
            
            props.updateExerciseList(newList)
            props.setUpdater(props.updater + 1)
            

            //console.log(res)
        })
    }
    return ( <div className="exercise-menu-container center-all">
        <div className="exercise-list">
        {exerciseData.exerciseList.map((exercise) => <ExerciseCategoryContainer data={exercise} selectExercise={setSelectedExercise} selectedExercise={selectedExercise}/>)}
        </div>
        <button className={exerciseButtonStyle() + ' center-x'} onClick={() => {saveExercise()}}>Add Exercise</button>
    </div> );
}
 
export default ExerciseMenu;