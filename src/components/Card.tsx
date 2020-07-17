import React from 'react';
import { Link } from 'react-router-dom';

type CityCard = {
    min: number,
    max: number,
    name: string,
    img: string,
    onClose(any:any): void,
    id: number
}

export default function Card ({min, max, name, img, onClose, id }: CityCard) {
    return (
      <div className="card p-1 m-2 shadow-lg bg-secondary rounded ">
        <div className="d-flex flex-row-reverse justify-content-between card-header bg-info text-light">
            <button onClick={onClose} type="button" className="close align-self-start" aria-label="Close">
                <span className="text-danger"aria-hidden="true">&times;</span>
            </button>
            <Link to={`/city/${id}`} className="text-decoration-none">
            <h5 className="card-title text-light ">{name}</h5>
            </Link>
        </div>
        <div className="card-body bg-ligth text-light">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
