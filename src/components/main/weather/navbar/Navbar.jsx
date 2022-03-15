import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const setActive = ({ isActive }) => (isActive ? styles.active : "")

const Navbar = (props) => {
	return (
		<div className={styles.navbar}>
			<div className={styles.tab}><NavLink to='/' className={setActive}>Now</NavLink></div>
			<div className={styles.tab}><NavLink to='/details' className={setActive}>Details</NavLink></div>
			<div className={styles.tab}><NavLink to='/forecast' className={setActive}>Forecast</NavLink></div>
		</div>
	)
}

export default Navbar;
