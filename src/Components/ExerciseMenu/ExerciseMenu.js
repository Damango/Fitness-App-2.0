import React, {useState} from 'react';
import "./ExerciseMenu.css"
import exerciseData from "../../JSON Data/ExerciseList.json"
import ExerciseCategoryContainer from "../ExerciseCategoryContainer/ExcerciseCategoryContainer"
const ExerciseMenu = (props) => {

    console.log(exerciseData)


    const [selectedExercise,  setSelectedExercise] = useState('')

    function exerciseButtonStyle(){
        if(selectedExercise != ''){
            return('menu-add-exercise-button-selected')
        }
        else{
            return('menu-add-exercise-button-empty')
        }
    }



    return ( <div className="exercise-menu-container center-all">
        <div className="exercise-list">
        {exerciseData.exerciseList.map((exercise) => <ExerciseCategoryContainer data={exercise} selectExercise={setSelectedExercise} selectedExercise={selectedExercise}/>)}
        </div>
        <button className={exerciseButtonStyle() + ' center-x'} onClick={() => {alert(JSON.stringify(selectedExercise))}}>Add Exercise</button>
    </div> );
}
 
export default ExerciseMenu;