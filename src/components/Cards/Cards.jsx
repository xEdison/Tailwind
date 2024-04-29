import React from 'react';
import { Images } from '../../js/Images';

export const Cards = () => {
  return (
    <div>
      {Images.map((imagen) => (
        <div className='mb-4' key={imagen.id}>
          <h2 className='text-2xl p-5 ml-32' >{imagen.blessdName}</h2>
          <div className="flex justify-between items-center">
            <img className='w-32 h-32 object-cover ml-3' src={imagen.img} alt={imagen.description} />
            <p className='p-5 font-medium text-sm ' >
              {imagen.description}
              <span className='block border-b border-black'></span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
