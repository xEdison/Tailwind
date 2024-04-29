import React from 'react'
import {Album} from '../../js/Album'
export const One = () => {
  return (
    <div>
    {Album.map(album => (
        <div className='bg-slate-600' key={album.id}>
            <img className='h-full object-contain ' src={album.img} alt={album.blessdName} />
            <h2>{album.blessdName}</h2>
            <p>{album.description}</p>
        </div>
    ))}
</div>
  )
}
