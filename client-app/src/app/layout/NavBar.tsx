import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar(props: 
    {
        openForm: () => void;
    }) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item>
                    Activities
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => props.openForm()} positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}