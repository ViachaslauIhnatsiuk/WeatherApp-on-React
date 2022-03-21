import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';


function App() {
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();

	function updateWeather(data) {
		setWeather({ data })
	}

	function updateForecast(data) {
		setForecast({ data })
	}

	return (
		<div className={styles.wrapper}>
			<Header
				updateWeather={updateWeather}
				updateForecast={updateForecast}
			/>
			<Main
				weather={weather}
				forecast={forecast}
			/>
		</div>
	);
}

export default App;
