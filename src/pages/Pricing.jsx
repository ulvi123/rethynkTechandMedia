import React from 'react'
import styles from '../styles/pricing.module.css'

const PricingCard = ({plan,price,features}) => {
  return (
    <div className={styles.Container}>
       <div className={styles.pricing_card}>
        <h2>{plan}</h2>
        <p className={styles.price}>{price}</p>
        <button>Pay for {plan}</button>
        <ul className={styles.features}>
            {features.map((feature,index)=>{
                return <li key={index}>{feature}</li>
            })}
        </ul>
       </div>
    </div>

  )
}

const PricingCards = ({cards})=>(
   <div className={styles.pricing_cards}>
     {cards.map((card,index)=>{
        return <PricingCard key={index} {...card}/>
     })}
   </div>
)

export default PricingCards