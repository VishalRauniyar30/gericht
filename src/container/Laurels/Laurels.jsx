import React from 'react'

import './LaurelsStyles.css'
import { SubHeading } from '../../components'
import { awards } from '../../constants/data'
import { laurels } from '../../constants/images'

const AwardCard = ({ award : { imgUrl, title, subtitle } }) => (
    <div className='app__laurels_awards-card'>
        <img src={imgUrl} alt="awards" />
        <div className="app__laurels_awards-card_content">
            <p className='p__cormorant app__laurels_awards-card_content-p'>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
)

const Laurels = () => {
    return (
        <div className='app__bg app__wrapper section__padding' id='awards'>
            <div className='app__wrapper_info'>
                <SubHeading title={'Awards & Recognition'} />
                <h1 className='headtext__cormorant'>Our Laurels</h1>
                <div className="app__laurels-awards">
                    {awards.map((award) => (
                        <AwardCard award={award} key={award.title} />
                    ))}
                </div>
            </div>
            <div className='app__wrapper_img'>
                <img src={laurels} alt="laurels_img" />
            </div>
        </div>
    )
}

export default Laurels