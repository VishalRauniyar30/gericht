import React from 'react'

import { chef, quote, sign } from '../../constants/images'
import { SubHeading } from '../../components'
import './ChefStyles.css'

const Chef = () => {
    return (
        <div className='app__bg app__wrapper section__padding'>
            <div className='app__wrapper_img app__wrapper_img-reverse'>
                <img src={chef} alt="chef_image" />
            </div>
            <div className='app__wrapper_info'>
                <SubHeading title="chef's word" />
                <h1 className='headtext__cormorant'>What We Believe In</h1>
                <div className='app__chef-content'>
                    <div className="app__chef-content_quote">
                        <img src={quote} alt="quote_image" />
                        <p className="p__opensans">
                            Cooking is an art that speaks to the soul. It's not just about food; it's 
                            about creating memories, sharing stories, and bringing people together.
                        </p>
                    </div>
                    <p className="p__opensans">
                        At Gericht, we believe that every dish should tell a story. Our culinary philosophy 
                        revolves around using the freshest ingredients, blending traditional methods with 
                        innovative techniques, and crafting flavors that leave a lasting impression. We 
                        strive to create an experience that goes beyond the plate, connecting with our guests 
                        through the universal language of food.
                    </p>
                </div>
                <div className="app__chef-sign">
                    <p>Kevin Luo</p>
                    <p className="p__opensans">Chef & Founder</p>
                    <img src={sign} alt="sign-image" />
                </div>
            </div>
        </div>
    )
}

export default Chef