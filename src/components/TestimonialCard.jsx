import React from "react";
import styles from "../styles/testimonials.module.css";

const TestimonialCard = ({testimonial}) => (
    <div key={testimonial.name} className={styles.testimonialItem}>
      <img src={testimonial.img} alt={testimonial.name} className={styles.testimonialsImg} />
      <div className={styles.testimonialsTitle}>
        <h1>{testimonial.name}</h1>
        <p>{testimonial.title}</p>
      </div>
      <div className={styles.testimonialsText}>
        <p>{testimonial.description}</p>
      </div>
    </div>
  );
  
export default TestimonialCard;
