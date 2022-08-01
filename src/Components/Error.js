import React from "react";
import styles from "../CSS/Error.module.css";

const Error = (props) => {
  return <div className={styles["error-message"]}>{props.message}</div>;
};

export default Error;
