import React, { useRef, useState } from 'react'

import './IntroStyles.css'
import { meal } from '../../constants/images'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const videoRef = useRef()
    return (
        <div className='app__video'>
            <video 
                src={meal} 
                ref={videoRef}
                typeof='video/mp4'
                loop
                controls={false}
                muted
            />
            <div className="app__video-overlay flex__center">
                <div 
                    className='app__video-overlay_circle flex__center'
                    onClick={() => {
                        setPlayVideo(!playVideo)
                        if(playVideo) {
                            videoRef.current.pause()
                        } else {
                            videoRef.current.play()
                        }
                    }}
                >
                    {playVideo ? (
                        <BsPauseFill fontSize={30} color='#fff' />
                    ) : (
                        <BsPlayFill fontSize={30} color='#fff' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Intro