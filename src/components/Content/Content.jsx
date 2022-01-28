import { Button, Card } from '@material-ui/core';
import React, { Component } from 'react';
import MacBookPro from '../../assets/macbook-pro.png';
import Board from '../../assets/board.png';
import './Content.css';

export default class Content extends Component {
    render() {
        return <div className='content-class'>
            <p className='content-heading'>
                Contents
            </p>
            <h5>
                We focus on ergonomics and meeting you where you work.
                It's only a keystroke away.
            </h5>
            <div className='card-container'>
                <Card className="left-card">
                <p className='card-title'>Work</p>
                    <p className='card-para'>
                        Ever wondered if you're too reliant
                        on a client for work? Slate helps
                        you identify .
                    </p>
                    <Button variant='contained'  className='card-btn'>Sign Up</Button>
                    <img src={MacBookPro} alt="macbook-pro" className='image' />
                </Card>
                <Card className="right-card">
                    <p className='card-title'>Design With Real Data</p>
                    <p className='card-para'>
                        Ever wondered if you're too reliant
                        on a client for work? Slate helps
                        you identify .
                    </p>
                    <Button variant='contained' className='card-btn'> Try For Free</Button>
                    <img src={Board} alt="macbook-pro" className='image' />
                </Card>
            </div>
        </div>;
    }
}
