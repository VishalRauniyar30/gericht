import React from 'react'

import { spoon } from '../../constants/images'
import './SubHeadingStyles.css'

const SubHeading = ({ title }) => {
    return (
        <div className='subheading'>
            <p className='p__cormorant'>{title}</p>
            <img src={spoon} alt="spoon_image" className='spoon__img' />
        </div>
    )
}

export default SubHeading