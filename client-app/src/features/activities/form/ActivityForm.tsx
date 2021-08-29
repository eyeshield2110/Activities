import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

export default function ActivityForm(props:
    {
        closeForm: () => void;
        activity: Activity | undefined;
        createOrEdit: (activity: Activity) => void;
    }) {


    const initialState = props.activity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    function handleSubmit() {
        props.createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    // note: activity declared below (which will fill the form if edit, and is empty if creating) 
    // is NOT the same as props.activity (which is the selected activity)
    const [activity, setActivity] = useState(initialState);
    return (
        <Segment clearing>
            {/* the clearing property remove float anomaly from the buttons (they overflow!) */}
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title'
                    onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description'
                    onChange={handleInputChange}  />
                <Form.Input placeholder='Category' value={activity.category} name='category'
                    onChange={handleInputChange}/>
                <Form.Input placeholder='Date' value={activity.date} name='date'
                    onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city'
                    onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue'
                    onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel'
                    onClick={() => props.closeForm()} />
            </Form>
        </Segment>
    )
}