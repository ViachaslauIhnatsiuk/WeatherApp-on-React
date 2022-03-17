import React from 'react';
import styles from './ForecastItem.module.css';


const ForecastItem = ({ forecast }) => {
	const isValid = forecast === undefined;

	function convertForecastTime(time) {
		let date = new Date(time);
		let hours = date.getHours();
		let minutes = "0" + date.getMinutes();
		return hours + ':' + minutes;
	}

	function convertForecastDay(time) {
		let date = new Date(time);
		return date.getDate() + ' ' + date.toLocaleString('en-US', { month: 'long' })
	}

	return (
		<div className={styles.forecast__current}>
			<div className={styles.current__left}>
				<div className={styles.current__date}>{isValid ? 'date' : convertForecastDay(forecast.day)}</div>
				<div className={styles.current__temperature}>Temperature: {isValid ? '-' : forecast.temperature}</div>
				<div className={styles.current__feelslike}>Feelslike: {isValid ? '-' : forecast.feelslike}</div>
			</div>
			<div className={styles.current__right}>
				<div className={styles.current__time}>{isValid ? 'time' : convertForecastTime(forecast.time)}</div>
				<div className={styles.current__weather}>{isValid ? 'weather' : forecast.weather}</div>
				<div className={styles.current__icon}><img src={isValid ? '' : forecast.icon} className={styles.current__img} alt='icon' /></div>
			</div>
		</div>
	)
}

export default ForecastItem;