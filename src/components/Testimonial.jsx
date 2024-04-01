import React from "react";
import styles from "../styles/testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    img: "/images/testimonialsPageObjects/Elchin.jpg",
    name: "Elchin Huseynov",
    title: "Founder at NewSpace",
    description:"Professional team,top level roducts and delivery efficiency is out of this world"
  },
  {
    img: "/images/testimonialsPageObjects/Wakana.jpg",
    name: "Wakana Fukuda",
    title: "Founder at BizWorld Japan",
    description:
      "Working with Rethynk team we have developed the best customer friendly product that still make us a good business",
  },
  {
    img: "/images/testimonialsPageObjects/Ramin.jpg",
    name: "Ramin Ismayilov", // Replace with a unique name for the third testimonial
    title: "Founder at Bildir.az", // Replace with a unique title
    description: "Working with this team has been a game-changer for our business. Their innovative solutions and customer-centric approach have truly set us apart in our industry.", // Replace with a different description
  },
];

const Testimonial = () => {
  return (
    <div className={styles.testimonialsContainer}>
      {testimonials.map((testimonial) => (
       <TestimonialCard testimonial={testimonial}/>
      ))}
    </div>
  );
};

export default Testimonial;
