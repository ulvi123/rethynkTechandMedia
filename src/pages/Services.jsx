import React from "react";
import styles from "../styles/services.module.css";
import ServiceCard from "../components/Services/servceCard";
import FAQ from "../components/Services/faq";
import { Link } from 'react-router-dom';


const Services = ({ services }) => {
  return (
    <div className={styles.main__container}>
      <div className={styles.services__heading}>
        <h1 className={styles.services__title}>Our services</h1>
        <p className={styles.services__text}>
          At Rethynk, we’re passionate about helping startups shine. We offer a
          wide range of creative services tailored to meet the unique needs of
          emerging businesses. Our team of experts specializes in everything
          from brand strategy and graphic design to website development and
          digital advertising.
          <br />
          <br /> We understand the challenges startups face, and we’re committed
          to delivering high-quality, innovative solutions that drive results
          and exceed expectations. Whether you’re a startup looking to redefine
          your brand, enhance your online presence, or create compelling
          content, Rethynk has the skills and expertise to make it happen.
          Explore our services below to see how we can help your startup thrive
        </p>
      </div>
      <div className={styles.services__grid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className={styles.contactContainer}>
        <div>
          <h2>Ready to convert your idea into awesome project?</h2>
          <Link to="/contact"><button className={styles.contactBtn}>schedule a call</button></Link>
          <p className={styles.contactCTA}>We’re quick, not hasty.</p>
        </div>
      </div>
      <FAQ/>
    </div>
  );
};

export default Services;
