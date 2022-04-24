import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const { data: images, loading } = useFetchGifs(category);
  
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{ category }</h3>
      { loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="flex flex-wrap">
          { images.map(imagen => <GifGridItem key={imagen.id} {...imagen} /> )
        }
      </div>
    </>
  )
}
