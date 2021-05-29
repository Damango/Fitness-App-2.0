
import './App.css';
import WorkoutsPage from "./Components/WorkoutsPage/WorkoutsPage"
import LoginPage from "./Components/LoginPage/LoginPage"

import {useState, useEffect} from 'react'

function App() {


  let connection = 'http://localhost:3000/'

  const [appState, setAppState] = useState(<LoginPage connection={connection}/>)


  useEffect(() => {

    setAppState(<LoginPage changeView={setAppState} connection={connection}/>)
  } ,[])


  return (
    <div className="App">
      <div className="app-wrapper">
        {appState}
      </div>
    
     
    </div>
  );
}

export default App;
