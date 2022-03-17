import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Weather.module.css';
import Now from './tabs/Now';
import Details from './tabs/Details';
import ForecastList from './tabs/ForecastList';
import Navbar from './navbar/Navbar';

const Weather = ({ weather, forecast }) => {
	return (
		<div className={styles.weather}>
			<Routes>
				<Route path='/' element={<Now weather={weather} />} />
				<Route path='/details' element={<Details weather={weather} />} />
				<Route path='/forecast' element={<ForecastList forecast={forecast} />} />
			</Routes>
			<Navbar />
		</div>
	)
}

export default Weather;