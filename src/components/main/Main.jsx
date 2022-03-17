import React from 'react';
import styles from './Main.module.css';
import Weather from './weather/Weather';
import Favorite from './locations/Favorite';

const Main = ({ weather, forecast }) => {
	return (
		<div className={styles.main}>
			<Weather weather={weather} forecast={forecast} />
			<Favorite weather={weather} forecast={forecast} />
		</div>
	)
}

export default Main;