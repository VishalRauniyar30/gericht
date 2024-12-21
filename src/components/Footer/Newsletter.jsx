import React from 'react'

import './NewsletterStyles.css'
import { SubHeading } from '../'

const Newsletter = () => {
    return (
        <div className='app__newsletter'>
            <div className="app__newsletter-heading">
                <SubHeading title={'NewsLetter'} />
                <h1 className='headtext__cormorant'>Subscribe to our NewsLetter</h1>
                <p className="p__opensans">and never miss latest updates!</p>
            </div>
            <div className="app__newsletter-input flex__center">
                <input type="email" placeholder='Enter Your Email Address' />
                <button type='button' className='custom__button'>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter