import React, {useState, useEffect} from 'react';
import "./WorkoutsPage.css"
import WorkoutCard from "../WorkoutCard/WorkoutCard"
import LineChart from "../LineChart/LineChart"
import { Line } from '@nivo/line';


const WorkoutsPage = (props) => {



    const [workoutsList, setWorkoutsList] = useState([
        {title: "First Workout",
            date: "May 15th",
        },
        {title: "Second Workout",
        date: "May 15th",
    },
    {title: "Third Workout",
    date: "May 15th",
}
    
    
    ])



    






    return ( <div className="workouts-page-container">


       <div className="workouts-page-wrapper">


           <div className="workouts-list-container">
               <div className="workouts-list-wrapper center-all">
                   <div className="workouts-list-header">
                       <div className="workouts-header-text">Workouts</div>
                       <button className="create-workout-button center-y">Create Workout +</button>
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