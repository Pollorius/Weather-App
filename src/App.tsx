import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';

export type City = {
  min: number; 
  max: number; 
  img: string; 
  id: number; 
  wind: any; 
  temp: any; 
  name: string; 
  weather: any; 
  clouds: any; 
  latitud: any; 
  longitud: any;
}


function App () {
  const [cities, setCities] = useState<City[]>([]);
  function onSearch(city: string) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2533a54b547dcbe8391672b632b84d0&units=metric`)
      .then(r => r.json())
      .then((response) => {
        if(response.main !== undefined){
          const city1: City= {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          };
          setCities(oldCities => [...oldCities, city1]);
        } else {
          alert("City not found");
        }
    });
  }
  function onClose(id:number) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  
  return (
      <div className="App">
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
        
      
    </div>
  );
}


export default App;
