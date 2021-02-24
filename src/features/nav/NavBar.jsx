import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar({setFormOpen}) {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/Logo.png" alt="logo" style={{marginRight: '0.5em'}}/> Re-vents
                </Menu.Item>
                <Menu.Item name="Events" />
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive content="Create Event" />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content="Login" style={{marginRight: '0.5em'}} />
                    <Button basic inverted content="Register" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}