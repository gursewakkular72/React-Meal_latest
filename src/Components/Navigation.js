import React from "react";
import styles from "../CSS/Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
  const count = useSelector((state) => state.totalItems);

  return (
    <div className={styles["div-nav"]}>
      <h1 className={styles["div-nav-h1"]}>
        <NavLink to="/">React+Meal</NavLink>
      </h1>
      <ul className={styles["div-nav-ul"]}>
        <li className={styles["cart-link"]}>
          <NavHashLink
            className={(navData) => (navData["isActive"] ? styles.active : "")}
            smooth
            to="/#menuSection"
          >
            Menu
          </NavHashLink>
        </li>
        <li
          className={styles["cart-link"]}
          data-count={count === 0 ? "" : count}
        >
          <NavHashLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/cart#cart"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
          >
            Cart
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
