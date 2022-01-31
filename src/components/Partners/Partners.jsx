import React, { Component } from 'react';
import './Partners.css';
import AppleLogo from '../../assets/apple-logo.png'
import ApiaryLogo from '../../assets/apiary-logo.png'
import IBMLogo from '../../assets/ibm-logo.png'
import AndroidLogo from '../../assets/android-logo.png'
import AirbnbLogo from '../../assets/airbnb-logo.png'
import Basecamp from '../../assets/basecamp-logo.png'
import { Button } from '@material-ui/core';

export default class Partners extends Component {
    render() {
        return <div className='partner-container'>
            <h3>
                Partners
            </h3>
            <p>We focus on ergonomics and meeting you where you work.
                It's only a keystroke away.</p>
            <div className='partner-logos'>
                <div className='row1'>
                <img src={AppleLogo} alt='Apple Logo'  className='brandlogo'/>
                <img src={ApiaryLogo} alt='Apiary Logo' className='brandlogo' />
                <img src={IBMLogo} alt='IBM Logo' className='brandlogo' />
                </div>
                <div className='row2'>
                <img src={AndroidLogo} alt='Android Logo' className='brandlogo' />
                <img src={AirbnbLogo} alt='Airbnb Logo'  className='brandlogo'/>
                <img src={Basecamp} alt='Basecamp Logo' className='brandlogo'/>
                </div>
                </div>
                <Button variant="outlined" className='partner-button'>
                    All Partners
                </Button>
        </div>;
    }
}
