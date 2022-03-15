import React from 'react';
import styles from './Main.module.css';
import Weather from './weather/Weather';
import Favorite from './locations/Favorite';

const Main = (props) => {
	return (
		<div className={styles.main}>
			<Weather />
			<Favorite />
		</div>
	)
}

export default Main;