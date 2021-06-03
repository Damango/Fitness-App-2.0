import React, {useState, useEffect} from 'react';
import "./WorkoutView.css"
import axios from "axios"
import Exercise from "../Exercise/Exercise"
import ExerciseMenu from "../ExerciseMenu/ExerciseMenu"

const WorkoutView = (props) => {


    const [workoutViewTitle, setWorkoutViewTitle] = useState(<div><input className="workout-title-input" placeholder="Enter Workout Title"/><button onClick={createWorkout}>Submit</button></div>)
    const [workoutData, setWorkoutData] = useState(props.data)
    const [exerciseMenu, setExerciseMenu] = useState(0)



    useEffect(() => {
        if(workoutData != null){
            setWorkoutViewTitle(<div className="workout-view-title">{workoutData.title}</div>)
        }
        let theView = document.querySelector('.workout-view-container');
        theView.style.opacity = 1;
    }, [])


    function renderExerciseMenu(){
        if(exerciseMenu === 1){
            return(<ExerciseMenu />)
        }
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
        })
        console.log(props.connection + 'user/addWorkout')
    }


    return ( <div className="workout-view-container">
        <div className="workout-view-wrapper">
            {renderExerciseMenu()}
           <button className="close-workout-view-button" onClick={() => {props.closeView(0)}}>Close</button>
            <div className="workout-chart-container">
            </div>
            <div className="workout-exercises-container">
                <div className="workout-exercises-wrapper">
                    {workoutViewTitle}
                    <button className="add-exercise-button" onClick={() => {setExerciseMenu(1)}}>Add Exercise</button>
                    <div className="workout-view-exercise-list-wrapper">
                        {workoutData.exercises.map((exercise) => <Exercise />)}

                    </div>

                </div>
            </div>
        </div>
    </div> );
}
 
export default WorkoutView;