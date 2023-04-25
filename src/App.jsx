import React, { useEffect, useState } from 'react'
import { Admin, Collections, Dashboard, Messages, User } from './modules'
import { Footer, Header, Sidebar } from './components'
import styles from './App.module.css'
import { Route, Routes, useLocation } from 'react-router-dom'


const App = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSideOpen(false);
  }, [location])
  return (
    <>
      <div className={styles.header}><Header isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} /></div>
      <div className={styles.container}>
        <div className={`${styles.sidebar} ${(isSideOpen) ? styles.open : ''}`}><Sidebar /></div>
        <div className={styles.content}>
          <div className={styles.page}>
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/user" element={<User />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <div className={styles.footer}><Footer /></div>
        </div>
      </div>
    </>
  )
}

export default App