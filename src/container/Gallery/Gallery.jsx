import React, { useRef } from 'react'

import './GalleryStyles.css'
import { SubHeading } from '../../components'
import { gallery01, gallery02, gallery03, gallery04 } from '../../constants/images'
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs'

const imagesGallery = [gallery01, gallery02, gallery03, gallery04]

const Gallery = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef
        if(direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }

    return (
        <div className='app__gallery flex__center'>
            <div className="app__gallery-content">
                <SubHeading title={'Instagram'} />
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans app__gallery-content-p'>
                    Discover the culinary artistry and vibrant ambiance of our establishment through our exclusive 
                    photo gallery. Each image captures the essence of our dedication to excellence.
                </p>
                <button className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {imagesGallery.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="gallery-image" />
                            <BsInstagram className='app__gallery-images_card-image-icon' />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className='app__gallery-images_arrows-icon' onClick={() => scroll('left')} />
                    <BsArrowRightShort className='app__gallery-images_arrows-icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    )
}

export default Gallery