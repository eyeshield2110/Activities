import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default function ActivityDashboard(props:
    {
        activities: Activity[];
        selectedActivity: Activity | undefined;
        selectActivity: (id: string) => void;
        cancelSelectActivity: () => void;
        editMode: boolean;
        openForm: (id: string) => void;
        closeForm: () => void;
        createOrEdit: (activity: Activity) => void;
        deleteActivity: (id: string) => void;
    }) {
    // in order to use props.property -> need to pass props argument in function(props)
    // here, props is an object with a property activities, that implements an array of Activity interface
    // https://reactjs.org/docs/components-and-props.html

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                activities={props.activities} 
                selectActivity={props.selectActivity} 
                deleteActivity={props.deleteActivity}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {props.selectedActivity &&
                    <ActivityDetails
                        activity={props.selectedActivity}
                        cancelSelectActivity={props.cancelSelectActivity}
                        openForm={props.openForm}
                    />
                }
                {props.editMode &&
                    <ActivityForm
                        closeForm={props.closeForm}
                        activity={props.selectedActivity}
                        createOrEdit={props.createOrEdit}
                    />}
            </Grid.Column>
        </Grid>
    )
}