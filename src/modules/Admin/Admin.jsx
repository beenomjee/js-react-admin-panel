import React, { useRef } from 'react'
import styles from './Admin.module.css'
import { BsDribbble, BsPlus } from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown, HiOutlineCreditCard } from 'react-icons/hi'
import { TbUsers } from 'react-icons/tb'
import { BsClock, BsMinecartLoaded } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'


const cardsData = [
    {
        name: 'Budget',
        icons: <HiOutlineCreditCard />,
        iconBG: '#ff579a',
        value: '$750.90',
        date: ' Since last month',
        profit: 13,
    },
    {
        name: 'New projects',
        icons: <TbUsers />,
        iconBG: '#5c60f5',
        value: '215',
        date: ' Since last month',
        profit: 30,
    },
    {
        name: 'Total hours',
        icons: <BsClock />,
        iconBG: '#00d4ff',
        value: '1.400',
        date: ' Since last month',
        profit: -5,
    },
    {
        name: 'Work load',
        icons: <BsMinecartLoaded />,
        iconBG: '#ff8c00',
        value: '95%',
        date: ' Since last month',
        profit: 10,
    }
]

const tableData = [
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Scheduled',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Postponed',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Canceled',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Not discussed',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Postponed',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Scheduled',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Postponed',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Not discussed',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Scheduled',
    },
    {
        avatar: "/avatart.jpeg",
        name: 'Robert Fox',
        date: 'Feb 15, 2021',
        companyName: 'Dribbble',
        companyLogo: <BsDribbble />,
        BgLogo: "#ff579a",
        offer: '$3.500',
        meeting: 'Canceled',
    }
]

const Admin = () => {
    const tabContaier = useRef(null);

    const tabChangeHandler = (e) => {
        Array.from(tabContaier.current.querySelectorAll('button')).forEach(button => {
            button.classList.remove(styles.active)
        });
        e.target.classList.add(styles.active);
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2>Application</h2>
                    </div>
                    <div className={styles.right}>
                        <button>
                            <span className={styles.icon}><HiOutlinePencil /></span>
                            <span>Edit</span>
                        </button>
                        <button>
                            <span className={styles.icon}><BsPlus /></span>
                            <span>Create</span>
                        </button>
                    </div>

                </div>
                <div className={styles.bottom} ref={tabContaier}>
                    <button onClick={tabChangeHandler} className={styles.active}>All Files</button>
                    <button onClick={tabChangeHandler}>Shared</button>
                    <button onClick={tabChangeHandler}>File requests</button>
                </div>
            </div>
            <div className={styles.cards}>
                {
                    cardsData.map((card, index) =>
                        <div className={styles.card} key={index}>
                            <div className={styles.left}>
                                <h6>{card.name}</h6>
                                <span>{card.value}</span>
                                <div className={`${styles.profit} ${card.profit >= 0 ? styles.up : styles.down}`}>
                                    <span className={styles.profitLost}>
                                        <span className={styles.icon}>{card.profit >= 0 ? <HiOutlineArrowNarrowUp /> : <HiOutlineArrowNarrowDown />}</span>
                                        <span className={styles.text}>{card.profit}%</span>
                                    </span>
                                    <span className={styles.date}>{card.date}</span>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <span className={styles.icon} style={{ "--bgColor": card.iconBG }}>
                                    {card.icons}
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.table}>
                <div className={styles.top}>
                    <h3>Applications</h3>
                </div>
                <div className={styles.wrapper}>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>COMPANY</th>
                                <th>OFFER</th>
                                <th>MEETING</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((data, index) => <tr key={index}>
                                    <td>
                                        <div>
                                            <img src={data.avatar} alt="AVATAR" />
                                            <span>{data.name}</span>
                                        </div>
                                    </td>
                                    <td>{data.date}</td>
                                    <td>
                                        <div>
                                            <span style={{ '--bgColor': data.BgLogo }} className={styles.icon}>
                                                {data.companyLogo}
                                            </span>
                                            <span>{data.companyName}</span>
                                        </div>
                                    </td>
                                    <td>{data.offer}</td>
                                    <td>
                                        <div>
                                            <span style={{ '--bgColor': (data.meeting === 'Scheduled') ? '#00cc88' : (data.meeting === 'Postponed') ? '#ff8c00' : (data.meeting === 'Canceled') ? '#ff3366' : '#16192c' }} className={styles.dot}></span>
                                            <span>{data.meeting}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button>View</button>
                                            <button><RiDeleteBin6Line /></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottom}>
                    <span>Showing 10 items out of 250 results found</span>
                </div>
            </div>
        </div>
    )
}

export default Admin