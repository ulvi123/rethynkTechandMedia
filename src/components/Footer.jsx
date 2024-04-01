import React from "react";
import styles from "../styles/footer.module.css";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <img src="/images/logos/3.png" alt="img" />
        </div>

        <div className={styles.footerColumn}>
          <h3>Terms and Conditions</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link>Terms of Service</Link>
            </li>
            <li className={styles.listItem}>
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Company</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link>Home</Link>
            </li>
            <li className={styles.listItem}>
              <Link>About Us</Link>
            </li>
            <li className={styles.listItem}>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link>+3723535345</Link>
            </li>
            <li className={styles.listItem}>
              <Link>hello@rethynk.co</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Location</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link>Maakri 12, Tallinn,Estonia</Link>
            </li>
            <li className={styles.listItem}>
              <Link>Narimanov 5, Baku,Azerbaijan</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.socialMedia}>
        <div>
          <LinkedInIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <FacebookIcon />
        </div>
      </div>
      <p style={{textAlign:"center"}}>&copy; 2023 Rethynk Digital Agency. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
