import React, {useState, useEffect} from 'react';
import "./WorkoutView.css"
import axios from "axios"

const WorkoutView = (props) => {


    const [workoutViewTitle, setWorkoutViewTitle] = useState(<input className="workout-title-input" placeholder="Enter Workout Title"/>)




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
           <button className="close-workout-view-button" onClick={() => {props.closeView(0)}}>Close</button>
            <div className="workout-chart-container">
                

            </div>


            <div className="workout-exercises-container">
                <div className="workout-exercises-wrapper">
                    {workoutViewTitle}
                    <button onClick={createWorkout}>Submit</button>
                    <button className="add-exercise-button">Add Exercise</button>

                </div>
            </div>
        </div>
    </div> );
}
 
export default WorkoutView;