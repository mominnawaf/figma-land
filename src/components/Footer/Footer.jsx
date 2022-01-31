import { List, ListItem } from '@material-ui/core';
import React, { Component } from 'react';
import './Footer.css';
import { LocationOnOutlined,AndroidOutlined,Facebook,Twitter,Instagram } from '@material-ui/icons';

export default class Footer extends Component {
    render() {
        return <div className='footer'>
            <div className='footer-left'>
                <div className='list-container'>
                    <h5>Fingertip</h5>
                    <List>
                        <ListItem>
                            Home
                        </ListItem>
                        <ListItem>
                            Example
                        </ListItem>
                        <ListItem>
                            Pricing
                        </ListItem>
                        <ListItem>
                            Updates
                        </ListItem>
                    </List>
                </div>
                <div className='list-container'>
                    <h5>Resources</h5>
                    <List>
                        <ListItem>
                            Home
                        </ListItem>
                        <ListItem>
                            Example
                        </ListItem>
                        <ListItem>
                            Pricing
                        </ListItem>
                        <ListItem>
                            Updates
                        </ListItem>
                    </List>
                </div>
                <div className='list-container'>
                    <h5>About</h5>
                    <List>
                        <ListItem>
                            Home
                        </ListItem>
                        <ListItem>
                            Example
                        </ListItem>
                        <ListItem>
                            Pricing
                        </ListItem>
                        <ListItem>
                            Updates
                        </ListItem>
                    </List>
                </div>

            </div>
            <div className='footer-right'>
                <div className='addess-container'>
                    <LocationOnOutlined/>
                    <p>7480 Mockingbird Hill undefined </p>
                </div>
                <div className='addess-container'>
                    <AndroidOutlined/>
                    <p>1234567890 </p>
                </div>
                <div className="social-container">
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    </div>
            </div>
        </div>;
    }
}
