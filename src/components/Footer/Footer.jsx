import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright © {new Date().getFullYear()} clever Inc. All rights reserved.</p>
        </footer>
    )
}

export default Footer