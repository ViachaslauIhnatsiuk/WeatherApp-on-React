import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Now.module.css';
import cloud from '../../../../img/cloud.svg';
import like from '../../../../img/like.svg';

const Now = ({ weather }) => {
	const isValid = weather === undefined;

	const [storage, setStorage] = useState([])

	useEffect(() => {
		const locations = localStorage.getItem('locations') || []
		setStorage(JSON.parse(locations))
	}, [])

	useEffect(() => {
		localStorage.setItem('locations', JSON.stringify(storage))
	}, [storage])

	function updateStorage() {
		if (!storage.includes(weather?.data.name)) {
			setStorage([...storage, weather?.data.name])
		}
	}

	return (
		<div className={styles.now}>
			<div className={styles.now__temperature}>{isValid ? `0\xB0` : weather.data.temperature + `\xB0`}</div>
			<div className={styles.now__icon}><img src={isValid ? cloud : weather.data.icon} alt='weather icon' /></div>
			<div className={styles.now__bottom}>
				<div className={styles.now__location}>{isValid ? 'Location' : weather.data.name}</div>
				<div className={styles.now__favorite} onClick={updateStorage}><img src={like} alt='like' /></div>
			</div>
		</div>
	)
}

export default Now;