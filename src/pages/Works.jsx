import React from "react";
import styles from "../styles/works.module.css";
import concept from "../components/howItWorks/first.svg";

const Section = ({ title, description, isImageFirst }) => (
  <div
    className={styles.container}
    style={{ flexDirection: isImageFirst ? "row-reverse" : "row" }}
  >
    <div className={styles.textContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const sections = [
    {
      title: "Conceptualization",
      description:
        "This initial phase is all about immersion. We dive deep into your vision, exploring the depths of your ideas to surface with the core concept that will become the heart of your project. We don’t just listen; we understand. We don’t just understand; we envision. This is the birthplace of innovation, where your idea starts to take shape.",
      isImageFirst: true,
    },
    {
      title: "Strategic Planning",
      description:
        "Once we have a firm grasp on the idea, we begin to sketch the dreams and draft the desires. This stage is all about chalking out the roadmap to success. We dot the i’s and cross the t’s, ensuring every detail is accounted for. It’s the blueprint of your project, setting the stage for the magic to happen.",
      isImageFirst: false,
    },
    {
      title: "Artistic Development",
      description:
        "With a clear plan in place, our artists take over. They paint the canvas with designs that echo your brand’s soul and resonate with your audience. This isn’t just about making things look good; it’s about creating an experience. An experience that’s as beautiful as it is intuitive, as engaging as it is simple.",
      isImageFirst: true,
    },
    {
      title: "Technical Implementation",
      description:
        "Now, it’s time for our code wizards to step in. They brew a potion of functionality, reliability, and security, turning the beautiful designs into a working product. Agile is our mantra, and we ensure that every line of code takes us a step closer to perfection.",

      isImageFirst: false,
    },
    {
      title: "Quality Assurance",
      description:
        "We believe in delivering nothing but the best. That’s why we put our creation to the test, squashing bugs, smoothing edges, and polishing to perfection. We listen, we learn, we iterate. It’s a cycle of continuous improvement, ensuring that what we deliver is nothing short of the best.",

      isImageFirst: true,
    },
    {
      title: "Launch & On-going support",
      description:
        "Finally, the moment of truth. The moment when our labor of love sees the light of day. But our journey doesn’t end here. We continue to support, maintain, and infuse love into the project, ensuring it grows and thrives. Because for us, it’s not just about launching a project; it’s about launching a success story..",

      isImageFirst: false,
    },
  ];

  return (
    <div className={styles.howItWorks}>
      {sections.map((section, index) => (
        <Section key={index} {...section} className={styles.section} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className={styles.btn}>Ready to get started?</button>
      </div>
    </div>
  );
};

export default HowItWorks;
