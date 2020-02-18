import React, { useEffect, useState } from 'react';
import { owmUrl } from '../../res/constants';

const ForecastPage = () => {
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    fetch(owmUrl).then((response: any) => {
      response.json().then((weather: any) => {
        setTemp(weather.main.temp);
        setCity(weather.name + ', ' + weather.sys.country);
      });
    });
  })

  return (
    <div className="App">
      <h2>Forecast</h2>
      <h3>Current weather</h3>
      <div>City: {city}</div>
      <div>Temperature: {temp} °C</div>
    </div>
  )
}

export default ForecastPage;