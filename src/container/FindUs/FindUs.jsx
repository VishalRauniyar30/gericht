import React from 'react'

import './FindUsStyles.css'
import { SubHeading } from '../../components'
import { findus } from '../../constants/images'

const FindUs = () => {
    return (
        <div className='app__bg app__wrapper section__padding' id='contact'>
            <div className='app__wrapper_info'>
                <SubHeading title='Contact' />
                <h1 className='headtext__cormorant app__findus-h1'>Find Us</h1>
                <div className='app__wrapper-content'>
                    <p className="p__opensans">Lane Ends Bunglaw, Whatcroft Hall Lane, Runheath, CW9 75G</p>
                    <p className="p__opensans app__wrapper-content-p">Opening Hours</p>
                    <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 pm</p>
                    <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 pm</p>
                </div>
                <button className='custom__button app__wrapper-btn'>Visit Us</button>
            </div>
            <div className='app__wrapper_img'>
                <img src={findus} alt="findus_img" />
            </div>
        </div>
    )
}

export default FindUs