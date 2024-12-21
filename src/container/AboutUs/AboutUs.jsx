import React from 'react'

import { G, knife, spoon } from '../../constants/images'
import './AboutUsStyles.css'

const AboutUs = () => {
    return (
        <div className='app__aboutus app__bg flex__center section__padding' id='about'>
            <div className='app__aboutus-overlay flex__center'>
                <img src={G} alt="G-overlay" />
            </div>
            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_about'>
                    <h1 className='headtext__cormorant'>About Us</h1>
                    <img src={spoon} alt="about_Spoon" className='spoon__img spoon__rev' />
                    <p className="p__opensans">
                        At Gericht, we believe in creating unforgettable dining experiences. 
                        Our journey is inspired by a passion for culinary excellence, blending 
                        traditional flavors with modern techniques to deliver dishes that delight 
                        every palate. Join us and savor a unique gastronomic adventure.
                    </p>
                    <button className='custom__button' type='button'>Know More</button>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={knife} alt="about_knife" />
                </div>
                <div className='app__aboutus-content_history'>
                    <h1 className='headtext__cormorant'>Our History</h1>
                    <img src={spoon} alt="about_spoon" className='spoon__img' />
                    <p className="p__opensans">
                        Since our inception, Gericht has been dedicated to bringing people together 
                        through food. From humble beginnings, we’ve grown into a beloved establishment, 
                        celebrated for our commitment to quality, creativity, and community. Every dish 
                        tells a story of heritage, innovation, and love for the craft.
                    </p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs