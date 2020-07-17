import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Cards from '../components/Cards';
import Nav from '../components/Nav';
import CityInfo from '../components/CityInfo';
import About from '../components/About';
import Footer from '../components/Footer';

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
  latitude: any; 
  longitude: any;
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
            latitude: response.coord.lat,
            longitude: response.coord.lon
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

  function onFilter(cityId: string) {
    let city: any[] = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }
  
  return (
    <div className="App">
    <Route
      path='/'
      render={() => <Nav onSearch={onSearch}/> }
    />
    <Route
      path='/'
      render={() => <Footer/> }
    />
    <Route
      path='/about'
      component={About}
    />
    <div>
      <Route 
      exact path='/'
        render={() => <Cards 
          cities={cities} 
          onClose={onClose}
          />}
      />
      <Route
        exact path='/city/:cityId'
        render={({match}) => <CityInfo
              city={onFilter(match.params.cityId)}
            />}
        />
    </div>    
  </div>
  );
}


export default App;
