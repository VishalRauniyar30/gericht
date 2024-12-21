import React from 'react'

import { SubHeading } from '../../components'
import { welcome } from '../../constants/images'
import './HeaderStyles.css'

const Header = () => {
    return (
        <div className='app__header app__wrapper section__padding' id='home'>
            <div className='app__wrapper_info'>
                <SubHeading title={'Chase the new flavour'}/>
                <h1 className='app__header-h1'>The Key To Find Dining</h1>
                <p className='p__opensans app__header-p'>Discover a unique culinary experience where exquisite flavors meet exceptional ambiance. Let our chefs take you on a journey of taste, blending tradition and innovation in every dish.</p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>
            <div className='app__wrapper_img'>
                <img src={welcome} alt="header_img" />
            </div>
        </div>
    )
}

export default Header