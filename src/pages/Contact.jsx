import React from "react";
import styles from "../styles/contact.module.css";
import { useState } from "react";

function Contact() {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");


  //Create a serverside code for this
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastName,
      message,
      email,
    };

    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(" Error:", error));
  };

  return (
    <div className={styles.contactContainer}>
      <div>
        <h1>How Can we Help?</h1>
        <p>Send us a message!</p>
      </div>
      <div>
        <form
          action="#"
          className={styles.formElements}
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="50"
            rows="10"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
