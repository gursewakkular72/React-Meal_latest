import React from "react";

import styles from "../CSS/Card.module.css";

import { Outlet } from "react-router-dom";

const Card = () => {
  return (
    <div className={styles["div-body"]}>
      <Outlet></Outlet>
    </div>
  );
};

export default Card;
