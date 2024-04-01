import React, { useState } from "react";
import styles from '../../styles/services.module.css'

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    {
      question: "What services do we provide?",
      answer:
        "We provide a variety of services including web design, graphic design, and digital marketing.",
    },
    {
      question: "What makes us different?",
      answer:
        "Our commitment to quality and our focus on the latest design trends set us apart.",
    },
    {
      question: "How can I get started with baked design?",
      answer:
        "You can get started by contacting us through our website or via email.",
    },
    {
      question: "What is the process of working with you?",
      answer:
        "Our process involves an initial consultation, followed by a proposal, then design and development, and finally launch and support.",
    },
    {
      question: "Do you offer support after the project is completed?",
      answer:
        "Yes, we offer ongoing support and maintenance after the project is completed.",
    },
  ];

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div className={styles.faqSection}>
      <h2>F.A.Q. Section</h2>
      <p style={{fontSize:"50px"}}>frequently asked questions</p>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <h3 onClick={() => handleQuestionClick(index)}>
            {faq.question}
            {selectedQuestion === index ? "-" : "+"}
          </h3>
          {selectedQuestion === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
