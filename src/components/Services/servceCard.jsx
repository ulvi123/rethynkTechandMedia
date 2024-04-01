import styles from "../../styles/services.module.css"

const ServiceCard = ({ title, description }) => (
  <div className={styles.serviceCard}>
    <div className={styles.card__icon}></div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
