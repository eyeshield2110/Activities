import React, { useEffect, useState } from 'react';
import './App.css';
import { ducks } from './demo';
import DuckItem from './DuckItem';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/activities').then(response => {
      console.log(response)
      setActivities(response.data);
    })
  }, []) //! forgetting to add this [] creates an infinite fetch and response of the api by axios...

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      
        
        {ducks.map(duck => (
          <DuckItem key={duck.name} duck={duck}/>
        ))}

        <List>
          {activities.map((activity: any) => (
          <List.Item key={activity.title}>{activity.title}</List.Item>
          ))}
        </List>
          
        
          
        
        

        <p style={{color:'red'}}>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
    </div>
  );
}

export default App;
