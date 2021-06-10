import React, {useState, useEffect} from 'react';
import "./WorkoutView.css"
import axios from "axios"
import Exercise from "../Exercise/Exercise"
import ExerciseMenu from "../ExerciseMenu/ExerciseMenu"

const WorkoutView = (props) => {


    
    const [workoutData, setWorkoutData] = useState(props.data)
    const [exerciseMenu, setExerciseMenu] = useState(0)
    const [exercisesList, setExercisesList] = useState([])

    const [updater,setUpdater] = useState(0)

    useEffect(() => {
        let theView = document.querySelector('.workout-view-container');
        theView.style.opacity = 1;


        if(props.data != null){
            setExercisesList(props.data.exercises)
        }
    }, [])



    

    function renderExerciseMenu(){
        if(exerciseMenu === 1){
            return(<ExerciseMenu closeMenu={setExerciseMenu} updater={updater} setUpdater={setUpdater} updateWorkoutList={props.updateWorkoutList} updateExerciseList={updateExerciseList} exercises={exercisesList} connection={props.connection} userData={props.userData} data={workoutData}/>)
        }
    }

    function updateExerciseList(data){

        console.log(exercisesList)

        setExercisesList(data)

        console.log(exercisesList)

    }



    function createWorkout(){
        let postObject;
        let workoutTitle = document.querySelector('.workout-title-input').value;
        postObject = {
            name: props.userData.name,
            workoutData:{ 
                title: workoutTitle,
                exercises:[]
            },
        }
        axios.post(props.connection + 'user/addWorkout', postObject).then((res) => {
            console.log(res)
            props.updateWorkouts(res.data)
        })
        console.log(props.connection + 'user/addWorkout')
        props.closeView(0)
       
    }

    function deleteWorkout(){

        let postObject;
        postObject = {
            name: props.userData.name,
            workoutID:props.data._id}

        axios.post(props.connection + 'user/deleteWorkout', postObject).then((res) => {
            console.log(res)
            props.updateWorkouts(res.data)
        })
        props.closeView(0)

    }



    if(props.data != null){


        return(<div className="workout-view-container">
        <div className="workout-view-wrapper">
            {renderExerciseMenu()}
            <span className="settings-button" onClick={() => {deleteWorkout()}}><i class="fas fa-cog"></i></span>
           <button className="close-workout-view-button" onClick={() => {props.closeView(0); props.updateWorkoutList()}}>Close</button>
            <div className="workout-chart-container">
            </div>
            <div className="workout-exercises-container">
                <div className="workout-view-stats-container">
                    <div className="stat-block-container"><span className="stat-block-text center-all">Volume: 5000</span></div>
                    <div className="stat-block-container"><span className="stat-block-text center-all">Volume: 5000</span></div>
                    <div className="stat-block-container"><span className="stat-block-text center-all">Volume: 5000</span></div>
                    <div className="stat-block-container"><span className="stat-block-text center-all">Volume: 5000</span></div>
                </div>
                <div className="workout-exercises-wrapper">
                <div className="workout-view-title">{workoutData.title}</div>
                    <button className="add-exercise-button" onClick={() => {setExerciseMenu(1)}}>Add Exercise +</button>
                    <div className="workout-view-exercise-list-wrapper">
                        {exercisesList.map((exercise) => <Exercise data={exercise}/>)}

                    </div>

                </div>
            </div>
        </div>
    </div>)
    }

    else{
        return(<div className="workout-view-container">
        <div className="workout-view-wrapper">
            {renderExerciseMenu()}
           <button className="close-workout-view-button" onClick={() => {props.closeView(0)}}>Close</button>
            <div className="workout-chart-container">
            </div>
            <div className="workout-exercises-container">
                <div className="workout-exercises-wrapper">
                <div><input className="workout-title-input" placeholder="Enter Workout Title"/><button onClick={createWorkout}>Submit</button></div>
                    <button className="add-exercise-button" onClick={() => {setExerciseMenu(1)}}>Add Exercise</button>
                  

                </div>
            </div>
        </div>
    </div>)
    }

   



    
}
 
export default WorkoutView;