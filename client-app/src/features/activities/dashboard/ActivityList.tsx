import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

export default function ActivityList(props:
    {
        activities: Activity[];
        selectActivity: (id: string) => void;
        deleteActivity: (id: string) => void;
    }) {
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
                                <Button onClick={() => props.deleteActivity(activity.id)} content='Delete' floated='right' color='red'/>
                                <Label basic content={activity.category}></Label>
                            </Item.Extra>
                        </Item.Content>

                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}