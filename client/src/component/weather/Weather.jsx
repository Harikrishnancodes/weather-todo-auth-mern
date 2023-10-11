import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './weatherstyle.css'
function Weather() {

    const [city, setCity] = useState('');
	const [weatherInfo, setWeatherInfo] = useState(null);

	function getWeather() {
		const apiKey = 'e26f75e01d4b2b68b987d11ebff32bee';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
			
				let MT = Math.round(data.main.temp);
				let FL = Math.round(data.main.feels_like);

				const weather = {
					location: `Weather in ${data.name}`,
					temperature: `Temperature: ${MT} C`,
					feelsLike: `Feels Like: ${FL} C`,
					humidity: `Humidity: ${data.main.humidity} %`,
					wind: `Wind: ${data.wind.speed} km/h`,
					condition: `Weather Condition: ${data.weather[0].description}`,
				};

				setWeatherInfo(weather);
			})

			.catch((error) => {
				console.error(error);
			});
	}
  return (
    <div className='weather-container'>
    <input
        type='text'
        placeholder='Enter city name'
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
    <button onClick={getWeather}>Get Weather</button>
    {weatherInfo && (
        <div className='weather-info'>
            <h3>{weatherInfo.location}</h3>
            <p>{weatherInfo.temperature}</p>
            <p>{weatherInfo.feelsLike}</p>
            <p>{weatherInfo.humidity}</p>
            <p>{weatherInfo.wind}</p>
            <p>{weatherInfo.condition}</p>
        </div>
    )}
    <Link to='/todo'>
        <button className='navlogout' >
          Todo
        </button>
        </Link>
      <Link to='/'>
        <button className='navlogout' >
          Logout
        </button>
        </Link>
</div>
  )
}

export default Weather