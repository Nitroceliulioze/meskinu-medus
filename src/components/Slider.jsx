import { useState, useEffect } from 'react';
import { images } from '../Helpers/CarouselData';


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);
      }, [currentIndex]);

  return (
    <div className='carousel'>
        <div className='carousel-inner' style={{backgroundImage: `url(${images[currentIndex].img})`}}>          
           <div className='left' onClick={() => {currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(images.length-1)}}>&lt;</div>
           <div className='center'></div>
           <div className='right' onClick={() => {currentIndex < images.length-1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)}}>&gt;</div>
        </div>
    </div>
  )
}

export default Slider