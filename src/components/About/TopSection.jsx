import React from "react";
import styles from "../About/topsection.module.css";
import banner from "../About/topimg.png";

const TopSection = () => {
  return (
    <div>
      <div>
        <img src={banner} alt="" className={styles.topImg} />
      </div>
      <div>
        <h1 className={styles.heading}>OUR JOURNEY</h1>
        <article className={styles.article}>
          In the year 2023, we embarked on a journey with Rethynk, a journey
          that was not just about creating a product or a service. It was a
          journey to create a movement, a revolution. We envisioned Rethynk as
          more than just a platform. We saw it as a transformative space where
          individuals, who come as 'me', evolve into a collective 'we'. <br/><br/>Our
          vision was to create a space where success is reimagined, where it is
          measured not just in terms of profit, but in terms of personal growth.
          Unity became our driving force, our guiding principle. <br/>We wanted to
          create a platform that didn't just change the market dynamics, but one
          that had the power to change lives. We aspired to be more than just a
          company. We wanted to be a beacon of innovation, a symbol of change
          and progress. Today, we can proudly say that we have achieved what we
          set out to do. We are not just a business; we are a revolution. But
          this revolution is just getting started.<br/><br/>It's a continuous journey of
          growth and transformation. We invite you to join us on this journey.
          Let's shape the future together. Let's create a world where we don't
          just dream of a better tomorrow, we actively create it. Because at 
          <strong> Rethynk</strong>, we believe in the power of creation. We believe in
          the power of dreams. And we believe in the power of unity.<br/> Together,
          we can create a better tomorrow. Together, we can make a difference.
          Join us, and be a part of this revolution. Be a part of <strong> Rethynk</strong>. Because here, we don't just dream, we create.
        </article>
      </div>
    </div>
  );
};

export default TopSection;
