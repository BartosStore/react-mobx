import React, { useEffect, useState } from 'react';
import { owmUrl } from '../../res/constants';

const ForecastPage = () => {
  const [temp, setTemp] = useState('');
  const [yesterdayTemp, setYesterdayTemp] = useState('');
  const [tomorrowTemp, setTomorrowTemp] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    fetch(owmUrl).then((response: any) => {
      response.json().then((weather: any) => {
        const todayTemp = parseFloat(weather.main.temp).toFixed(1);
        setTemp(todayTemp.toString());
        setCity(weather.name + ', ' + weather.sys.country);
      });
    });

    const promise = new Promise((resolve, reject) => {
      // resolve argument is passed into then
      setTimeout(() => resolve({ tomorrow: '7.5', yesterday: '9.2' }), 500);
      // reject argument is passed into catch
      // setTimeout(() => reject('Fail'), 500);
    });
    promise
      .then((temp: any) => {
        setTomorrowTemp(temp.tomorrow);
        setYesterdayTemp(temp.yesterday);
      })
      .catch((message) => console.log(message))
      .finally(() => console.log('Promise is done.'));
  })

  return (
    <div className="App">
      <h2>Forecast</h2>
      <h3>Current weather</h3>
      <div>City: {city}</div>
      <div>Temperature: {temp} °C</div>
      <div>Yesterday: {yesterdayTemp} °C</div>
      <div>Tomorrow: {tomorrowTemp} °C</div>
    </div>
  )
}

export default ForecastPage;