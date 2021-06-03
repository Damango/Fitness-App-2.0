import React from 'react';
import "./WorkoutCard.css"
const WorkoutCard = (props) => {

    console.log(props.data)
    return ( <div className="workout-card-container">

    <div className="workout-card-title">{props.data.title}</div>
    <div className="workout-card-date">{props.data.dateCreated}</div>
    <div className="workout-exercise-count">{props.data.exercises.length}</div>

    </div> );
}
 
export default WorkoutCard;