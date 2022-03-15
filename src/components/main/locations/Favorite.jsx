import React from 'react';
import styles from './Favorite.module.css';

const Favorite = (props) => {
	return (
		<div className={styles.locations}>
			<div className={styles.locations__title}>Added Locations:</div>
			<ul className={styles.locations__list}>

			</ul>
		</div>
	)
}

export default Favorite;