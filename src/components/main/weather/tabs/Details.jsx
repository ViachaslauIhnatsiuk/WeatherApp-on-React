import React from 'react';
import styles from './Details.module.css';


const Details = ({ weather }) => {
	const isValid = weather === undefined;
	function convertTime(unixTime) {
		let date = new Date(unixTime * 1000);
		let hours = date.getHours();
		let minutes = "0" + date.getMinutes();
		return hours + ':' + minutes.slice(-2);
	}

	return (
		<div className={styles.details}>
			<div className={styles.details__location}>{isValid ? 'Location' : weather.data.name}</div>
			<ul className={styles.details__data}>
				<li>Temperature: {isValid ? '' : weather.data.temperature + `\xB0`}</li>
				<li>Feels like: {isValid ? '' : weather.data.feelslike + `\xB0`}</li>
				<li>Weather: {isValid ? '' : weather.data.weather}</li>
				<li>Sunrise: {isValid ? '' : convertTime(weather.data.sunrise)}</li>
				<li>Sunset: {isValid ? '' : convertTime(weather.data.sunset)}</li>
			</ul>
		</div>
	)
}

export default Details;