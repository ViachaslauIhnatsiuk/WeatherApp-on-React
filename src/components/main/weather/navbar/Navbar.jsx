import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<div className={styles.navbar}>
			<div className={styles.tab}><a href="#">Now</a></div>
			<div className={styles.tab}><a href="#">Details</a></div>
			<div className={styles.tab}><a href="#">Forecast</a></div>
		</div>
	)
}

export default Navbar;