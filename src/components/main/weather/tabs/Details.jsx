import React from 'react';
import styles from './Details.module.css';

const Details = (props) => {
	return (
		<div className={styles.details}>
			<div className={styles.location}>Location</div>
			<ul className={styles.data}>
				<li className={styles.temperature}>Temperature: </li>
				<li className={styles.feelslike}>Feels like: </li>
				<li className={styles.weather}>Weather: </li>
				<li className={styles.sunrise}>Sunrise: </li>
				<li className={styles.sunset}>Sunset: </li>
			</ul>
		</div>
	)
}

export default Details;