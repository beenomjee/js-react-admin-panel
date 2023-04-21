import React, { useEffect } from 'react'
import styles from './Header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
const Header = ({ isSideOpen, setIsSideOpen }) => {
    useEffect(() => {
        if (isSideOpen)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'auto'
    }, [isSideOpen])
    return (
        <>
            {isSideOpen && <div onClick={() => setIsSideOpen(false)} className={styles.backdropWrapper}></div>}
            <header className={styles.container}>
                <div className={styles.left}><button onClick={() => setIsSideOpen(true)}><RxHamburgerMenu /></button></div>
                <div className={styles.center}><img src="/logo.svg" alt="CLEVER" /></div>
                <div className={styles.right}><img src="/avatart.jpeg" alt="AVATAR" /></div>
            </header>
        </>
    )
}

export default Header;