import React, { useState } from 'react';
import styles from './Header.module.css';
import Input from './Input';
import Button from './Button';


const URL = {
	SERVER_WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
	SERVER_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
	API_KEY: '55474e87d9a4c38b155c6340bf00cce3&units=metric',
}


const Header = (props) => {
	const [city, setCity] = useState({ name: '' });

	let weather = {};
	let forecast = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} };

	async function getForecast(e) {
		e.preventDefault();
		const urlWeather = `${URL.SERVER_WEATHER}?q=${city.name}&appid=${URL.API_KEY}`;
		const urlForecast = `${URL.SERVER_FORECAST}?q=${city.name}&appid=${URL.API_KEY}`;
		await fetch(urlWeather)
			.then(response => response.json())
			.then(response => {
				weather.name = response.name
				weather.temperature = Math.round(response.main.temp)
				weather.icon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
				weather.feelslike = Math.round(response.main.feels_like)
				weather.weather = response.weather[0].description
				weather.sunrise = response.sys.sunrise
				weather.sunset = response.sys.sunset
			})
			.catch(error => alert(error.message + '\nPlease, enter correct data'))
		await fetch(urlForecast)
			.then(response => response.json())
			.then(response => {
				for (let i = 1; i <= 8; i++) {
					forecast[i].name = response.city.name;
					forecast[i].day = response.list[i].dt_txt;
					forecast[i].temperature = Math.round(response.list[i].main.temp) + '\xB0';
					forecast[i].feelslike = Math.round(response.list[i].main.feels_like) + '\xB0';
					forecast[i].time = (response.list[i].dt_txt);
					forecast[i].weather = response.list[i].weather[0].description;
					forecast[i].icon = `http://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png`;
				}
			})
			.catch(error => alert(error.message + '\nPlease, enter correct data'))
		props.updateWeather(weather)
		props.updateForecast(forecast)
		setCity({ name: '' })
	}

	return (
		<form className={styles.form}>
			<Input
				value={city.name}
				onChange={e => setCity({ name: e.target.value })}
				type="text"
				placeholder='Location'
			/>
			<Button onClick={getForecast}>Search</Button>
		</form>
	)
}



export default Header;