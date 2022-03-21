import React from 'react';
import styles from './Main.module.css';
import Weather from './weather/Weather';
import Favorite from './locations/Favorite';

const Main = ({ weather, forecast, storage }) => {
	return (
		<div className={styles.main}>
			<Weather
				weather={weather}
				forecast={forecast}
			/>
			<Favorite storage={storage} />
		</div>
	)
}

export default Main;