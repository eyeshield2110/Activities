import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

export default function ActivityList(props:
    {
        activities: Activity[];
        selectActivity: (id: string) => void;
        deleteActivity: (id: string) => void;
        submitting: boolean;
    }) {

        const [target, setTarget] = useState('');

        function handleActivityDelete(event: SyntheticEvent<HTMLButtonElement>, id: string) {
            setTarget(event.currentTarget.name);
            props.deleteActivity(id);
        }
    return (
        <Segment>
            <Item.Group divided>
                {props.activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div><b>{activity.city}, {activity.venue}</b></div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => props.selectActivity(activity.id)}
                                    floated='right' content='View' color='blue'></Button>
                                <Button
                                    loading={props.submitting && target === activity.id}
                                    name={activity.id}
                                    onClick={(event) => handleActivityDelete(event, activity.id)}
                                    content='Delete'
                                    floated='right'
                                    color='red' />
                                <Label basic content={activity.category}></Label>
                            </Item.Extra>
                        </Item.Content>

                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}