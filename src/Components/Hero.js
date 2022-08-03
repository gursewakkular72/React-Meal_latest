import React from "react";

import styles from "../CSS/Hero.module.css";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className={styles["div-hero"]}>
      <div className={styles["div-hero-text"]}>
        <h1 className={styles["hero-h1"]}>Freshly prepared and Organinc</h1>
        <p>
          From the top restaurants across metro Vancouver, we bring you 100%
          organic and freshly meals prepared by experienced chefs.
        </p>
        <HashLink smooth to="/#menuSection">
          <div
            className={styles["hero-downward-arrow"]}
            aria-label="button to menu"
          >
            &darr;
          </div>
        </HashLink>
      </div>
    </div>
  );
};

export default Hero;
