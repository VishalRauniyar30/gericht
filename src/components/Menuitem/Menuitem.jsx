import React from 'react'

import './MenuitemStyles.css'

const Menuitem = ({ title, price, tags }) => {
    return (
        <div className='app__menuitem'>
            <div className="app__menuitem-head">
                <div className="app__menuitem-name">
                    <p className="p__cormorant app__menuitem-title">
                        {title}
                    </p>
                </div>
                <div className='app__menuitem-dash' />
                <div className="app__menuitem-price">
                    <p className="p__cormorant">{price}</p>
                </div>
            </div>
            <div className="app__menuitem-sub">
                <p className="p__opensans app__menuitem-sub_p">{tags}</p>
            </div>
        </div>
    )
}

export default Menuitem