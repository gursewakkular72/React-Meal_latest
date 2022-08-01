import styles from "../CSS/Spinner.module.css";

const Spinner = () => (
  // <div className={styles["spinner"]}>
  //   <Oval
  //     className=""
  //     height="100"
  //     width="100"
  //     radius="9"
  //     color="green"
  //     ariaLabel="three-dots-loading"
  //     wrapperStyle
  //     wrapperClass
  //   ></Oval>
  // </div>
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
