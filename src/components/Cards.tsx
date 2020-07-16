import React from 'react';
import './Cards.css';
import Card from './Card';
import { City } from '../App';

type Props = {
    cities: City[],
    onClose(id: number): void,
}

export default function Cards({ cities, onClose }: Props) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}