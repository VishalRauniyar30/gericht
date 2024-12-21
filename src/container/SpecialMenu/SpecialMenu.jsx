import React from 'react'

import { Menuitem, SubHeading } from '../../components'
import './SpecialMenuStyles.css'
import { cocktails, wines } from '../../constants/data'
import { menu } from '../../constants/images'

const SpecialMenu = () => {    
    return (
        <div className='app__specialmenu flex__center section__padding' id='menu'>
            <div className="app__specialmenu-title">
                <SubHeading title='Menu That Fits Your Palette' />
                <h1 className="headtext__cormorant">Today&apos;s Special</h1>
            </div>
            <div className="app__specialmenu-menu">
                <div className="app__specialmenu-menu_wine flex__center">
                    <p className="app__specialmenu-menu_heading">Wine & Beer</p>
                    <div className="app__specialmenu-menu_items">
                        {wines.map((wine, index) => (
                            <Menuitem  key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                        ))}
                    </div>
                </div>
                <div className="app__specialmenu-menu_img">
                    <img src={menu} alt="menu_img" />
                </div>
                <div className="app__specialmenu-menu_cocktails flex__center">
                <p className="app__specialmenu-menu_heading">Cocktails</p>
                    <div className="app__specialmenu-menu_items">
                        {cocktails.map((cocktail, index) => (
                            <Menuitem  key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='app__specialmenu-button'>
                <button type='button' className='custom__button'>View More</button>
            </div>
        </div>
    )
}

export default SpecialMenu