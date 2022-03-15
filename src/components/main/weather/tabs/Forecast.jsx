import React from 'react';
import styles from './Forecast.module.css';

const Forecast = (props) => {
	return (
		<div className={styles.forecast}>
			<div className={styles.forecast__location}>Aktobe</div>
			<div className={styles.forecast__forecasts}>
				<div className={styles.forecast__current}>
					<div className={styles.current__left}>
						<div className={styles.current__date}></div>
						<div className={styles.current__temperature}></div>
						<div className={styles.current__feelslike}></div>
					</div>
					<div className={styles.current__right}>
						<div className={styles.current__time}></div>
						<div className={styles.current__weather}></div>
						<div className={styles.current__icon}><img src="" className={styles.current__img} alt='img' /></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Forecast;