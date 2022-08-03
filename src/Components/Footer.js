import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Footer.module.css";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles["div-footer-container"]}>
      <div className={styles["div-footer"]}>
        <Link className={styles.title} to="/">
          React+Meal
        </Link>
        <p>&copy; gursewak singh {year}</p>
        <p>All rights reserved.</p>
        <div className={styles["div-icons-source-link"]}>
          <a
            target="_blank"
            href="https://icons8.com/icon/62765/mastercard-logo"
            rel="noreferrer"
          >
            Mastercard Logo
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </div>
        <div className={styles["div-icons-source-link"]}>
          <a
            target="_blank"
            href="https://icons8.com/icon/lWv6YCiqqn4t/visa"
            rel="noreferrer"
          >
            Visa
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
