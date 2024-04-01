import React from 'react'
import styles from '../About/bottomection.module.css'
import partners from './partners'

const BottomSection = () => {
  return (
    <div className={styles.bottomSection}>
       <h2 className={styles.bottomHeading}>The Team</h2>
       <div className={styles.partners}>
         {partners.map((partner,index)=>(
          <div key={index} className={styles.partner}>
            <img src={partner.img} alt={partner.name} />
            <h3>{partner.name}</h3>
            <p>{partner.role}</p>
          </div>
         ))}
       </div>
    </div>
  )
}

export default BottomSection