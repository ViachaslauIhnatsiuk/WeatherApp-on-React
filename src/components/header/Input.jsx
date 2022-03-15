import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
	return (
		<input type="text" className={styles.input} placeholder='Location' />
	)
}

export default Input;