import React from 'react';
import "./Exercise.css"
import axios from 'axios'

const Exercise = (props) => {


    function addSet(){

        let postObject;


        axios.post(props.connection + '/user/addSet', postObject).then((res) => {
            console.log(res)
        })

        
    }


    return ( <div className="exercise-container">
       <div className="exercise-name">{props.data.name}</div>
       <div className="categories-container">categories</div>
       <div className="sets-list-container">
           {props.data.sets.map((set) => <div className="set-block"></div>)}
           <button className="add-set-button center-y">+</button>
       </div>
    </div> );
}
 
export default Exercise;