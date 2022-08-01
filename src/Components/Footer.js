import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Footer.module.css";
// import { Link } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles["div-footer-container"]}>
        <div className={styles["div-footer"]}>
          <Link className={styles.title} to="/">
            React+Meal
          </Link>
          <p>&copy; gursewak singh {year}</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
