import React from "react";
import styles from "../About/midsection.module.css";

const ValueBox = ({ title, description }) => {
  return (
    <div className={styles.valueBox}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const MidSection = () => {
  return (
    <div className={styles.midsection}>
      <h1 className={styles.heading}>Our Values</h1>
      <div className={styles.valuesContainer}>
        <ValueBox
          title="CREATIVE"
          description="We are artists, innovators, and visionaries. We bring ideas to life and transform the ordinary into extraordinary."
        />
        <ValueBox
          title="PASSIONATE"
          description="We are fueled by passion and driven by our love for what we do. We pour our heart and soul into every project, big or small."
        />
        <ValueBox
          title="BOLD "
          description="We are fearless, daring, and unafraid to take risks. We push boundaries and challenge the status quo."
        />
        <ValueBox
          title="COLLABORATIVE"
          description="We believe in the power of collective genius. We work together, learn from each other, and inspire one another."
        />
        <ValueBox
          title="DEDICATED "
          description="We are committed to excellence and unwavering in our pursuit of perfection. We go the extra mile because good enough is never enough."
        />
        <ValueBox
          title="INCLUSIVE"
          description="We celebrate diversity and foster an inclusive culture where everyone feels seen, heard, and valued."
        />
      </div>
    </div>
  );
};

export default MidSection;
