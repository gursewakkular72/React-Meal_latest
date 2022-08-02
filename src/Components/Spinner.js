import styles from "../CSS/Spinner.module.css";

const Spinner = () => (
  <div className={styles["spinner"]}>
    <div className={`${styles["lds-ring"]} `}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
