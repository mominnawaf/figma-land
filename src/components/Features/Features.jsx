import React, { Component } from 'react';
import './Features.css';
import FeatureImg from '../../assets/features.png'
import { RestaurantMenuOutlined, FaceOutlined, AllInclusiveOutlined } from '@material-ui/icons'

export default class Features extends Component {
    render() {
        return <div className='features'>
            <h2>
                Features
            </h2>
            <h6>
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
            </h6>
            <div className='main-features'>
                <img src={FeatureImg} alt='features' />
                <div>
                    <div className='content'>
                        <div className='title-container'>
                            <RestaurantMenuOutlined className='icon' />
                            <p className='title'>A single source
                                of truth</p>
                        </div>
                        <p className='description'>When you add work to your
                            Slate calendar we automatically
                            calculate useful insights
                        </p>
                    </div>
                    <div className='content'>
                        <div className='title-container'>
                            <FaceOutlined className='icon' />
                            <p className='title'>Intuitive
                                interface</p>
                        </div>
                        <p className='description'>When you add work to your
                            Slate calendar we automatically
                            calculate useful insights

                        </p>
                    </div>
                    <div className='content'>
                        <div className='title-container'>
                            <AllInclusiveOutlined className='icon' />
                            <p className='title'>Or with rules</p>
                        </div>
                        <p className='description'>When you add work to your
                            Slate calendar we automatically
                            calculate useful insights

                        </p>
                    </div>
                </div>
            </div>
        </div>;
    }
}
