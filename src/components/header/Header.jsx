import React from 'react';
import styles from './Header.module.css';
import Input from './Input';
import Button from './Button';

const Header = (props) => {
	return (
		<form className={styles.form}>
			<Input />
			<Button />
		</form>
	)
}

export default Header;