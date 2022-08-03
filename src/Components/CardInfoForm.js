import React, { useRef } from "react";
// import CheckoutForm from "./CheckoutForm";
import styles from "../CSS/CheckoutForm.module.css";

const CardInfoForm = () => {
  const creditCardNumber = useRef(null);

  // cardNumberChangeHandler adds a space after 4 digits
  const cardNumberChangeHandler = (e) => {
    const length = creditCardNumber.current.value.length;

    if (length !== 0) {
      if (e.key !== "Delete")
        if (e.key !== "Backspace") {
          console.log(e.key);
          if (length % 5 === 0) {
            console.log("length", length);
            let prevValue = creditCardNumber.current.value;
            console.log("preValue", prevValue);
            const charAtLenght = prevValue[length - 1];
            console.log("charAtLength", charAtLenght);
            const newValue =
              prevValue.slice(0, length - 1).concat(" ") + charAtLenght;

            creditCardNumber.current.value = newValue;
          }
        }
    }
  };

  return (
    <div className={styles["card-info"]}>
      <label
        className={styles["credit-card-number"]}
        htmlFor="credit-card-number"
      >
        Card number<span>*</span>
      </label>
      <input
        maxLength="19"
        onKeyUp={cardNumberChangeHandler}
        ref={creditCardNumber}
        type="text"
        id="credit-card-number"
        name="credit-card-number"
        placeholder="1111 1111 1111 1111"
      ></input>
      <br></br>
      <label htmlFor="name-on-the-card">
        Name on the Card<span>*</span>
      </label>
      <input type="text" id="name-on-the-card"></input> <br></br>
      <label htmlFor="expiry-date">
        Expiry Date<span>*</span>
      </label>
      <input
        type="text"
        name="expiry-date"
        id="expiry-date"
        placeholder="01/11"
        maxLength={5}
      ></input>
      <br></br>
      <label htmlFor="3-digit-code">
        3 digit code<span>*</span>
      </label>
      <input
        type="text"
        name="3-digit-code"
        id="3-digit-code"
        maxLength={3}
      ></input>
      <br></br>
    </div>
  );
};

export default CardInfoForm;
