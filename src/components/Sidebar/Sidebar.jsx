import React from 'react'
import styles from './Sidebar.module.css'
import { HiOutlineHome } from 'react-icons/hi'
import { TbBrandGoogleAnalytics, TbMessageCircle2, TbUsers } from 'react-icons/tb'
import { BsBookmarks } from 'react-icons/bs'
import { RiUser3Fill } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="CLEVER" />
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#"><div className={styles.left}><span className={styles.icon}><HiOutlineHome /></span><span className={styles.text}>Dashboard</span></div><div className={styles.right}></div></a></li>
                    <li><a className={styles.active} href="#"><div className={styles.left}><span className={styles.icon}><TbBrandGoogleAnalytics /></span><span className={styles.text}>Analitycs</span></div><div className={styles.right}></div></a></li>
                    <li><a href="#"><div className={styles.left}><span className={styles.icon}><TbMessageCircle2 /></span><span className={styles.text}>Messeges</span></div><div className={styles.right}><span className={styles.message}>6</span></div></a></li>
                    <li><a href="#"><div className={styles.left}><span className={styles.icon}><BsBookmarks /></span><span className={styles.text}>Collections</span></div><div className={styles.right}></div></a></li>
                    <li><a href="#"><div className={styles.left}><span className={styles.icon}><TbUsers /></span><span className={styles.text}>Users</span></div><div className={styles.right}></div></a></li>
                </ul>
            </nav>
            <div className={styles.contactContainer}>
                <div className={styles.title}>
                    <h6>Contacts</h6>
                    <span>13</span>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <div className={styles.left}>
                            <div className={`${styles.left} ${styles.active}`}><img src="/avatart.jpeg" alt="AVATAR" /></div>
                            <div className={styles.right}>
                                <div className={styles.top}><span>Marie Claire</span></div>
                                <div className={styles.bottom}><span>Paris, FR</span></div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <TbMessageCircle2 />
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.left}>
                            <div className={`${styles.left} ${styles.active}`}><img src="/avatart.jpeg" alt="AVATAR" /></div>
                            <div className={styles.right}>
                                <div className={styles.top}><span>Marie Claire</span></div>
                                <div className={styles.bottom}><span>Paris, FR</span></div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <TbMessageCircle2 />
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.left}>
                            <div className={styles.left}><img src="/avatart.jpeg" alt="AVATAR" /></div>
                            <div className={styles.right}>
                                <div className={styles.top}><span>Marie Claire</span></div>
                                <div className={styles.bottom}><span>Paris, FR</span></div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <TbMessageCircle2 />
                        </div>
                    </div>
                </div>
            </div>
            <nav className={styles.bottom}>
                <ul>
                    <li><a href="#"><span><RiUser3Fill /></span><span>Account</span></a></li>
                    <li><a href="#"><span><CiLogout /></span><span>Logout</span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar