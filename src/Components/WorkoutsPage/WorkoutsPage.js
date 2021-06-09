import React, {useState, useEffect} from 'react';
import "./WorkoutsPage.css"
import WorkoutCard from "../WorkoutCard/WorkoutCard"
import LineChart from "../LineChart/LineChart"
import WorkoutView from "../WorkoutView/WorkoutView"
import axios from "axios"
import { Line } from '@nivo/line';


const WorkoutsPage = (props) => {


    const [workoutView, setWorkoutView] = useState(0);
    const [workoutViewData, setWorkoutViewData] = useState()
    const [workoutsList, setWorkoutsList] = useState([])


    //console.log(workoutsList)

    useEffect(() => {

        setTimeout(() => {


            if(props.data.name != null){
                axios.post(props.connection + 'user/getWorkouts', {name: props.data.name}).then((res) => {
                    console.log(res)
                    if(props.data.workouts != null){
                        setWorkoutsList(props.data.workouts)
                    }
                    
                })
            }
            else{
                console.log('Something is wrong')
            }
            
        }, 100);

       
        
    }, [])
    


    function updateWorkoutList(){
    
            axios.post(props.connection + 'user/getWorkouts', {name: props.data.name}).then((res) => {
                console.log(res)

                    //setWorkoutsList(props.data.workouts)


                
            })
        
      
    }



    function renderWorkoutView(){

        if(workoutView === 1){
            return(<WorkoutView updateWorkoutList={updateWorkoutList} updateWorkouts={setWorkoutsList} closeView={setWorkoutView} connection={props.connection} userData={props.data} data={workoutViewData}/>)
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
                       <button className="create-workout-button center-y" onClick={() => {setWorkoutViewData(); setWorkoutView(1)}}>Create Workout +</button>
                   </div>
                   <div className="workout-list-scroll"> 
                   {workoutsList.map((workout) => <WorkoutCard data={workout} openWorkoutView={setWorkoutView} setWorkoutViewData={setWorkoutViewData}/> )}
                   </div>
               
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