import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import './Hero.css';
import Screen from '../../assets/screen.png'

export default class Hero extends Component {
  render() {
    return <div className='hero'>
        <h1>
        Work at the speed of thought.
        </h1>
        <h5>
        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
        </h5>
        <div className='btn-container'>
            <Button className='free-btn'>Try For Free</Button>
            <Button className='learn-btn' variant='outlined'>Learn More</Button>
        </div>
        <img src={Screen} alt='screen'/>
        <div className='grad'> </div>
    </div>;
  }
}
