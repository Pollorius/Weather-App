import React from 'react';
import Card from './Card';
import { City } from '../containers/App';

type Props = {
    cities: City[],
    onClose(id: number): void,
}

export default function Cards({ cities, onClose }: Props) {
  if(cities){
    return (
      <div className="d-flex justify-content-center flex-wrap">
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
      <div>No Cities</div>
    )
  }
}