import React from "react";
import { City } from '../containers/App';

type Props = {
    city: City;
}

export default function CityInfo({city}: Props) {
    if(!city) return <h2>City cannot be found!</h2>;
    return (
        <div className="city mt-2">
                    <div className="card-header bg-info text-light ">
                        <h2>{city.name}</h2>
                    </div>
                <div className="row" >
                    <div className="col-sm"></div>
                    <ul className="list-group list-group-flush">
                        <div className="list-group-item">
                            <h5 className="font-weight-bold">
                            Temperature: {city.temp} ºC
                            </h5>
                        </div>
                        <div className="list-group-item">
                            <h5 className="font-weight-bold">
                            Weather: {city.weather}
                            </h5>
                        </div>
                        <div className="list-group-item">
                            <h5 className="font-weight-bold">
                            Wind: {city.wind} km/h
                            </h5>
                        </div>
                        <div className="list-group-item">
                            <h5 className="font-weight-bold">
                            Clowds: {city.clouds}
                            </h5>
                        </div>
                        <div className="list-group-item">
                            <h5 className="font-weight-bold">
                            Latitude: {city.latitude}º
                            </h5>
                        </div>
                        <div className="list-group-item">
                            <h5 className="font-weight-bold">
                            Longitude: {city.longitude}º
                            </h5>
                        </div>
                    </ul>
                    <div className="col-sm"></div>
            </div>
        </div>
    )
}