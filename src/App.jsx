import React, { useState } from 'react'
import { Admin } from './modules'
import { Header, Sidebar } from './components'
import styles from './App.module.css'


const App = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <>
      <div className={styles.header}><Header isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} /></div>
      <div className={styles.container}>
        <div className={`${styles.sidebar} ${(isSideOpen) ? styles.open : ''}`}><Sidebar /></div>
        <div className={styles.content}><Admin /></div>
      </div>
    </>
  )
}

export default App