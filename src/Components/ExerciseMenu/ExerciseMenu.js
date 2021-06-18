import React, {useState} from 'react';
import "./ExerciseMenu.css"
import exerciseData from "../../JSON Data/ExerciseList.json"
import ExerciseCategoryContainer from "../ExerciseCategoryContainer/ExcerciseCategoryContainer"
import axios from 'axios';
const ExerciseMenu = (props) => {


    const [selectedExercise,  setSelectedExercise] = useState('')
    let [selectedList, setSelectedList] = useState([]);
    let [counter, setCounter] = useState(0)
    
   

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
        })
    }


    function updateSelectedList(newItem, category){

        let newObject = newItem
        newObject.category = category
        let i;
        let found = false;
        let theList = selectedList;
        if(theList.length > 0){
            for(i = 0; i < theList.length; i++){
                if(theList[i].name === newItem.name){
                   found = true;
                    theList.splice(i ,1)
                   break;
                }
            }
            if(found === false){
                console.log('No Name Match Push')
                theList.push(newItem)
            }
        }
        else{
            theList.push(newItem)
        }
        
        setSelectedList(theList)
        console.log(selectedList)
        setCounter(counter + 1)
    }


    if(props.template){
        return (<div className="template-creation-container center-all"> 
        <div className="exercise-menu-container-template">
        <div className="exercise-list">
        {exerciseData.exerciseList.map((exercise) => <ExerciseCategoryContainer  addToList={updateSelectedList} template={true} category={exercise.category} data={exercise} selectExercise={setSelectedExercise} selectedExercise={selectedExercise} />)}
        </div>
      
        <button className={exerciseButtonStyle() + ' center-x'} onClick={() => {saveExercise()}}>Add Exercise</button>
    </div>
    <div className="selected-exercise-list-container">
        <div className="selected-list-header">Selected Exercises</div>
        {selectedList.map((exercise) => <div className="selected-exercise-list"><div className={exercise.category + " exercise-indicator center-y"}></div>{exercise.name}</div>)}
    </div>
    <button className="close-exercise-menu-button" onClick={() => {props.closeMenu(false)}}>X</button>
    </div> );

    }
    else{
        return ( <div className="exercise-menu-container center-all">
        
        <div className="exercise-list">
        {exerciseData.exerciseList.map((exercise) => <ExerciseCategoryContainer data={exercise} selectExercise={setSelectedExercise} selectedExercise={selectedExercise}/>)}
        </div>
        <button className="close-exercise-menu-button" onClick={() => {props.closeMenu(0)}}>X</button>
        <button className={exerciseButtonStyle() + ' center-x'} onClick={() => {saveExercise()}}>Add Exercise</button>
    </div> );
    }
  
}
 
export default ExerciseMenu;