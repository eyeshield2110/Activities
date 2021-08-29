import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
// import { ducks } from '../../demo';
// import DuckItem from '../../DuckItem';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';

function App() {

  // Reread what these do: States, Effects, Hooks
  // ------------------------------------------------------------------------------------------
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {
    axios.get('https://localhost:5001/api/activities').then(response => {
      console.log(response)
      setActivities(response.data);
    })
  }, []) //! forgetting to add this [] creates an infinite fetch and response of the api by axios...

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]); //uuid: creates a new id each time we create new activity
    //: setActivities([...activities, activity]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(activity => activity.id !== id)])
  }

  // ------------------------------------------------------------------------------------------

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      {/* {ducks.map(duck => (
          <DuckItem key={duck.name} duck={duck}/>
        ))} */}
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />

      </Container>
    </>
  );
}

export default App;
