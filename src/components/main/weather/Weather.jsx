import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Weather.module.css';
import Now from './tabs/Now';
import Details from './tabs/Details';
import Forecast from './tabs/Forecast';
import Navbar from './navbar/Navbar';

const Weather = (props) => {
	return (
		<div className={styles.weather}>
			<Routes>
				<Route path='/' element={<Now />} />
				<Route path='/details' element={<Details />} />
				<Route path='/forecast' element={<Forecast />} />
			</Routes>
			<Navbar />
		</div>
	)
}

export default Weather;