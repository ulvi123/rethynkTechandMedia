import React from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/logos/3.png" alt="img"/>
      </div>
      <div >
        <ul className={styles.list}>
          <li className={styles.listItem}><Link to="/">Home</Link></li>
          <li className={styles.listItem}><Link to="/about">About</Link></li>
          <li className={styles.listItem}><Link to="/services">Services</Link></li>
          <li className={styles.listItem}><Link to="/works">How it works</Link></li>
          <li className={styles.listItem}><Link to="/pricing">Pricing</Link></li>
          <li className={styles.listItem}><Link to="/contact">Contact</Link></li>
          <li className={styles.listItem}><Link to="/bootcamp">Bootcamp</Link></li>
        </ul>
      </div>
      <div className={styles.contactBtn}>
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default Header