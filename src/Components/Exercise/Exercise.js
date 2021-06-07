import React from 'react';
import "./Exercise.css"

const Exercise = (props) => {

    {console.log(props)}
    return ( <div className="exercise-container">
       <div className="exercise-name">{props.data.name}</div>
       <div className="sets-list-container">
           {props.data.sets.map((set) => <div className="set-block"></div>)}
       </div>
    </div> );
}
 
export default Exercise;