import React, { useEffect, useRef } from "react";
import styles from "../CSS/Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";

const Navigation = (props) => {
  const count = useSelector((state) => state.totalItems);
  const navigation = useRef(null);

  const obsCallback = (entries) => {
    console.log("oberserver entries");
    console.log(entries);
  };
  const options = {
    root: null,
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsCallback, options);
    observer.observe(navigation.current);
  });

  return (
    <React.Fragment>
      <div className={styles["div-nav"]} ref={navigation}>
        <h1 className={styles["div-nav-h1"]}>
          <NavLink to="/">React+Meal</NavLink>
        </h1>
        <ul className={styles["div-nav-ul"]}>
          <li className={styles["cart-link"]}>
            <NavHashLink
              className={(navData) =>
                navData["isActive"] ? styles.active : ""
              }
              smooth
              to="/#menuSection"
              // onClick={scrollToMenu}
            >
              Menu
            </NavHashLink>
            {/* <Link
              containerId="#menuSection"
              hashSpy={true}
              activeClass="active"
              to="menuSection"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // onSetActive={this.handleSetActive}
            >
              Menu
            </Link> */}
          </li>
          <li
            className={styles["cart-link"]}
            data-count={count === 0 ? "" : count}
          >
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
