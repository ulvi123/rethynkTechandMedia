import React from 'react'
import styles from '../styles/about.module.css'
import TopSection from '../components/About/TopSection'
import MidSection from '../components/About/MidSection'
import BottomSection from '../components/About/BottomSection'

const About = () => {
  return (
    <div className={styles.About__Container}>
      <TopSection/>
      <br/><br/>
      <MidSection/>
      <br/><br/>
      <BottomSection/>
    </div>
  )
}

export default About