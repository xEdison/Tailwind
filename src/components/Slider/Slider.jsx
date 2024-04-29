
import React, { useState } from 'react';
import { Images } from '../../js/Images';

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div className="m-0 max-h bg-black p-10 flex  justify-between items-center">
        <button className='text-white border m-4 p-2 ' onClick={prevImage}>Anterior</button>
        <img src={Images[currentImageIndex].img} alt={Images[currentImageIndex].description} className="w-3/5" />
        <button className='text-white border m-4 p-2' onClick={nextImage}>Siguiente</button>
      </div>
    );
  };
  
  export default Slider;
