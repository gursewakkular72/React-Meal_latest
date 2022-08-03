import styles from "../CSS/Spinner.module.css";

const Spinner = () => (
  <div className={styles["spinner-div"]}>
    <div className={`${styles["spinner"]} `}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
