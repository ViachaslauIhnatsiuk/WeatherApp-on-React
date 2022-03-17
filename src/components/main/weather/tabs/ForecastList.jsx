import React from 'react';
import styles from './ForecastList.module.css';
import ForecastItem from './ForecastItem';

const Forecast = ({ forecast }) => {
	const isValid = forecast === undefined;

	return (
		<div className={styles.forecast}>
			<div className={styles.forecast__location}>{isValid ? 'Location' : forecast.data[1].name}</div>
			<div className={styles.forecast__forecasts}>
				<ForecastItem forecast={forecast.data[1]} />
				<ForecastItem forecast={forecast.data[2]} />
				<ForecastItem forecast={forecast.data[3]} />
				<ForecastItem forecast={forecast.data[4]} />
				<ForecastItem forecast={forecast.data[5]} />
				<ForecastItem forecast={forecast.data[6]} />
				<ForecastItem forecast={forecast.data[7]} />
				<ForecastItem forecast={forecast.data[8]} />
			</div>
		</div>
	)
}

export default Forecast;