import React, {useState} from 'react';
import "./Exercise.css"
import axios from 'axios'

const Exercise = (props) => {

    const [setList, setSetList] = useState(props.data.sets)


    function addSet(){


        console.log(props.data);

        let postObject = {
           workoutID: props.workoutData._id,
           name:props.userData.name,
           newSet: {reps: 20, weight: 225},
           exerciseID:props.data.ID

        }


        axios.post(props.connection + '/user/addSet', postObject).then((res) => {
            console.log(res)

            setSetList(res.data.sets)

            
        })

        
    }


    return ( <div className="exercise-container">
       <div className="exercise-name">{props.data.name}</div>
       <div className="categories-container">categories</div>
       <div className="sets-list-container">
           {setList.map((set) => <div className="set-block center-y">{set.reps} x {set.weight}</div>)}
           <button className="add-set-button center-y" onClick={addSet}>+</button>
       </div>
    </div> );
}
 
export default Exercise;