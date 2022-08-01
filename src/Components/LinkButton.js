import React from "react";
import styles from "../CSS/LinkButton.module.css";
import { HashLink } from "react-router-hash-link";

const LinkButton = (props) => {
  return (
    <div className={styles["go-back-menu-div"]}>
      <span className={styles["message"]}>{props.message}</span>
      <HashLink className={styles["shop-here-link"]} smooth to={props.link}>
        <div className={styles["shop-here-link-div"]}>{props.buttonText}</div>
      </HashLink>
    </div>
  );
};

export default LinkButton;
