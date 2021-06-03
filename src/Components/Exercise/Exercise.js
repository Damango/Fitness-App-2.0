import React from 'react';
import "./Exercise.css"

const Exercise = (props) => {
    return ( <div className="exercise-container">
        {props.data.title}
    </div> );
}
 
export default Exercise;