import React from 'react';
import styles from '../../styles/services.module.css'

const ServicesSection = () => {
    return (
        <div className = {styles.contactContainer}>
            <h2>Ready to discuss your project?</h2>
            <button style={{ background: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
                Schedule a call
            </button>
            <p style={{ color: 'white', marginTop: '20px' }}>WE DON'T OVERTHINK, WE ARE FAST.</p>
        </div>
    );
};

export default ServicesSection;