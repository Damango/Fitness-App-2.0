import React, {useState, useEffect} from 'react';
import "./WorkoutsPage.css"
import WorkoutCard from "../WorkoutCard/WorkoutCard"
import LineChart from "../LineChart/LineChart"
import WorkoutView from "../WorkoutView/WorkoutView"
import axios from "axios"
import { Line } from '@nivo/line';


const WorkoutsPage = (props) => {


    const [workoutView, setWorkoutView] = useState(0);




    const [workoutsList, setWorkoutsList] = useState([])


    console.log(props.data)

    useEffect(() => {

        if(props.data.name != null){
            axios.post(props.connection + 'user/getWorkouts', {name: props.data.name}).then((res) => {
                console.log(res)
                if(props.data.workouts != null){
                    setWorkoutsList(props.data.workouts)
                }
                
            })
        }
        
    }, [])




    function renderWorkoutView(){

        if(workoutView === 1){
            return(<WorkoutView closeView={setWorkoutView} connection={props.connection} userData={props.data}/>)
        }
        else{
            return ('')
        }

    }
    






    return ( <div className="workouts-page-container">
        {renderWorkoutView()}


       <div className="workouts-page-wrapper">


           <div className="workouts-list-container">
               <div className="workouts-list-wrapper center-all">
                   <div className="workouts-list-header">
                       <div className="workouts-header-text">Workouts</div>
                       <button className="create-workout-button center-y" onClick={() => {setWorkoutView(1)}}>Create Workout +</button>
                   </div>
                {workoutsList.map((workout) => <WorkoutCard data={workout}/> )}
               </div>
           </div>
          


        <div className="chart-container">
            <div className="chart-container-header">
                <div className="data-changer-button">Volume</div>
            </div>
            <div className="chart-wrapper">
                <LineChart />
              
            </div>
        </div>

        <div className="templates-container">

            <div className="templates-wrapper">

            </div>
        </div>




       </div>

       

    </div> );
}
 
export default WorkoutsPage;