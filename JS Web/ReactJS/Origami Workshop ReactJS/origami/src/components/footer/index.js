import React from 'react';
import Link from '../link';
import styles from './index.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <div>
            <Link href="#" title="Going to 1" type="header" />
            <Link href="#" title="Going to 2" type="header" />
            <Link href="#" title="Going to 3" type="header" />
            <Link href="#" title="Going to 4" type="header" />
            <Link href="#" title="Going to 5" type="header" />
            <Link href="#" title="Going to 6" type="header" />
            </div>
            <p className={styles.university}>Software University 2019</p>
        </footer>
    )
}

export default Footer;