import React from 'react';
import styles from './Header.module.css';

let Header = () => (
            <div className={styles.header}>
            <h1>The INFO6150 News</h1>
            <time dateTime="02-20-2019">Wed, February 20, 2019</time>
            </div> 
)

export default Header;