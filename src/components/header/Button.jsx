import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button type="submit" className={styles.button}>Search</button>
	)
}

export default Button;