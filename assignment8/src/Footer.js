import React from 'react';
import styles from './Footer.module.css';

let Footer = () => (
     <div className={styles.footer}>
        <p>&copy; 2019,</p>
        <address className={styles.author}>&nbsp;April Bingham</address>
    </div>
)

export default Footer;