import React, { useRef, useState } from "react";
import styles from "../CSS/CheckoutForm.module.css";
import LinkButton from "./LinkButton";
import { mastercard, visaCard } from "../Icons/Icons";
import useValidation from "../CustomHooks/use-validation";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { itemsSliceActions } from "../Store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { wait } from "../JS/functions";
import Spinner from "./Spinner";
import { WAIT_TIME } from "../JS/config";

const CheckoutForm = (props) => {
  const fname = useRef(null);
  const lname = useRef(null);
  const checkoutEmail = useRef(null);
  const phoneNumber = useRef(null);
  const unit = useRef(null);
  const houseNumber = useRef(null);
  const streetAddress = useRef(null);
  const city = useRef(null);
  const province = useRef(null);
  const postalCode = useRef(null);
  const creditCardNumber = useRef(null);
  const nameOnCreditCard = useRef(null);
  const expiryOnCreditCard = useRef(null);
  const codeOnCreditCard = useRef(null);
  const dispatch = useDispatch();
  const orderTotal = useSelector((state) => state.orderTotal);
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const {
    isfnameValid,
    fnameMessage,
    islnameValid,
    lnameMessage,
    isCheckoutEmailValid,
    checkoutEmailMessage,
    isPhoneNumberValid,
    phoneNumberMessage,
    isHouseNumberValid,
    houseNumberMessage,
    isStreetAddressValid,
    streetAddressMessage,
    isCityValid,
    cityMessage,
    isProvinceValid,
    provinceMessage,
    isPostalCodeValid,
    postalCodeMessage,
    isCardCardNumberValid,
    creditCardNumberMessage,
    isNameOnCreditCardValid,
    nameOnCreditCardMessage,
    isCreditCardExpiryValid,
    creditCardExpiryMessage,
    isCreditCardSecurityCodeValid,
    creditCardSecurityCodeMessage,
    submitHandler,
    resetForm,
  } = useValidation();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const payload = {
      fname: fname.current.value,
      lname: lname.current.value,
      checkoutEmail: checkoutEmail.current.value,
      phoneNumber: phoneNumber.current.value,
      unit: unit.current.value,
      houseNumber: houseNumber.current.value,
      streetAddress: streetAddress.current.value,
      city: city.current.value,
      province: province.current.value,
      postalCode: postalCode.current.value,
      creditCardNumber: creditCardNumber.current.value,
      nameOnCreditCard: nameOnCreditCard.current.value,
      expiryOnCreditCard: expiryOnCreditCard.current.value,
      codeOnCreditCard: codeOnCreditCard.current.value,
    };

    submitHandler({ type: "checkout-form", payload });
  };

  if (
    isfnameValid &&
    islnameValid &&
    isCheckoutEmailValid &&
    isPhoneNumberValid &&
    isHouseNumberValid &&
    isStreetAddressValid &&
    isCityValid &&
    isProvinceValid &&
    isPhoneNumberValid &&
    isPostalCodeValid &&
    isCardCardNumberValid &&
    isNameOnCreditCardValid &&
    isCreditCardExpiryValid &&
    isCreditCardSecurityCodeValid
  ) {
    setShowSpinner(true);
    // As I am using a promise here, I was expecting this to stop here for 2 seconds and show a spinner. Then after two seconds I was intending to clear the form.
    // But the execution does not stop. So Instead I chose to redirect the user to landing page right after they submit the form.
    // is it possible to stop the execution here for 2 seconds ?
    wait(WAIT_TIME).then(() => {
      props.orderSubmitHandler();
      dispatch(itemsSliceActions.resetCart());
      navigate("/");
      setShowSpinner(false);
    });

    resetForm({ type: "reset-form" });

    fname.current.value = null;
    lname.current.value = null;
    checkoutEmail.current.value = null;
    phoneNumber.current.value = null;
    unit.current.value = null;
    houseNumber.current.value = null;
    streetAddress.current.value = null;
    city.current.value = null;
    province.current.value = null;
    postalCode.current.value = null;
    creditCardNumber.current.value = null;
    nameOnCreditCard.current.value = null;
    expiryOnCreditCard.current.value = null;
    codeOnCreditCard.current.value = null;
  }

  const cardNumberChangeHandler = (e) => {
    const length = creditCardNumber.current.value.length;

    if (length !== 0) {
      if (e.key !== "Delete")
        if (e.key !== "Backspace") {
          if (length % 5 === 0) {
            let prevValue = creditCardNumber.current.value;
            const charAtLenght = prevValue[length - 1];
            const newValue =
              prevValue.slice(0, length - 1).concat(" ") + charAtLenght;
            creditCardNumber.current.value = newValue;
          }
        }
    }
  };

  const form = (
    <form onSubmit={onSubmitHandler} className={styles["form"]}>
      <h1 className={styles.heading}>You are checking out</h1>
      <p className={styles["asterisk-message"]}>
        Fields with <span>*</span> are required.
      </p>
      <div className={styles["credit-card-icons"]}>
        {mastercard} {"  "} {visaCard}
      </div>
      <div className={styles["form-content"]}>
        <div className={styles["personal-info"]}>
          <label htmlFor="first-name">
            First Name<span>*</span>
          </label>
          <input
            ref={fname}
            type="text"
            id="first-name"
            name="first-name"
          ></input>{" "}
          {fnameMessage !== "" && (
            <span className="span-error-message"> {fnameMessage} </span>
          )}
          <br></br>
          <label htmlFor="last-name">
            Last Name<span>*</span>
          </label>
          <input
            ref={lname}
            type="text"
            id="last-name"
            name="last-name"
          ></input>
          {lnameMessage !== "" && (
            <span className="span-error-message">{lnameMessage}</span>
          )}
          <br></br>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input ref={checkoutEmail} type="email"></input>
          {checkoutEmailMessage !== "" && (
            <span className="span-error-message">{checkoutEmailMessage}</span>
          )}
          <br></br>
          <label htmlFor="phone-number">
            Phone Number<span>*</span>
          </label>
          <input
            ref={phoneNumber}
            type="text"
            id="phone-number"
            name="phone-number"
            placeholder="111-111-1111"
            maxLength={12}
          ></input>
          {phoneNumberMessage !== "" && (
            <span className="span-error-message">{phoneNumberMessage}</span>
          )}
          <br></br>
          <div>
            <div className={styles["unit-house-number"]}>
              <div className={styles["unit"]}>
                <label htmlFor="unit"> Unit</label>
                <input ref={unit} type="text" id="unit" name="unit"></input>
              </div>
              <div className={styles["house-number"]}>
                <label htmlFor="house-number">
                  House Number<span>*</span>
                </label>

                <input
                  ref={houseNumber}
                  type="text"
                  id="house-number"
                  name="house-number"
                ></input>
                {houseNumberMessage !== "" && (
                  <span className="span-error-message">
                    {houseNumberMessage}
                  </span>
                )}
              </div>
            </div>

            <div className={styles["street-address-city"]}>
              <div className={styles["street-address"]}>
                <label htmlFor="street-address">
                  Street Address<span>*</span>
                </label>
                <input
                  ref={streetAddress}
                  type="text"
                  id="street-address"
                  name="street-address"
                ></input>
                {streetAddressMessage !== "" && (
                  <span className="span-error-message">
                    {streetAddressMessage}
                  </span>
                )}
              </div>
              <div className={styles["city"]}>
                <label htmlFor="city">
                  City<span>*</span>
                </label>
                <input ref={city} type="text" id="city" name="city"></input>
                {cityMessage !== "" && (
                  <span className="span-error-message">{cityMessage}</span>
                )}
              </div>
            </div>
            <div className={styles["province-postal-code"]}>
              <div className={styles["province"]}>
                <label htmlFor="province">
                  Province<span>*</span>
                </label>
                <select ref={province} name="province" id="province">
                  <option value=""></option>
                  <option value="alberta">Alberta</option>
                  <option value="british-columbia">British Columbia</option>
                  <option value="manitoba">Manitoba</option>
                  <option value="new-brunswick">New Brunswick</option>
                  <option value="newfoundland">Newfoundland</option>
                  <option value="labrador">Labrador</option>
                  <option value="nova-scotia">Nova Scotia</option>
                  <option value="Ontario">Ontario</option>
                  <option value="prince-edward-island">
                    Prince Edward Island
                  </option>
                  <option value="quebec">Quebec</option>
                  <option value="saskatchewan">Saskatchewan</option>
                </select>
                <br></br>

                {provinceMessage !== "" && (
                  <span className="span-error-message">{provinceMessage}</span>
                )}
              </div>
              <div className={styles["postal-code"]}>
                <label htmlFor="postal-code">
                  Postal Code<span>*</span>
                </label>
                <input
                  ref={postalCode}
                  type="text"
                  id="postal-code"
                  name="postal-code"
                ></input>
                {postalCode !== "" && (
                  <span className="span-error-message">
                    {postalCodeMessage}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

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
          {creditCardNumberMessage !== "" && (
            <span className="span-error-message">
              {creditCardNumberMessage}
            </span>
          )}
          <br></br>
          <label htmlFor="name-on-the-card">
            Name on the Card<span>*</span>
          </label>
          <input
            ref={nameOnCreditCard}
            type="text"
            id="name-on-the-card"
          ></input>{" "}
          {nameOnCreditCardMessage !== "" && (
            <span className="span-error-message">
              {nameOnCreditCardMessage}
            </span>
          )}
          <br></br>
          <label htmlFor="expiry-date">
            Expiry Date<span>*</span>
          </label>
          <input
            ref={expiryOnCreditCard}
            type="text"
            name="expiry-date"
            id="expiry-date"
            placeholder="01/11"
            maxLength={5}
          ></input>
          {creditCardExpiryMessage !== "" && (
            <span className="span-error-message">
              {creditCardExpiryMessage}
            </span>
          )}
          <br></br>
          <label htmlFor="3-digit-code">
            3 digit code<span>*</span>
          </label>
          <input
            ref={codeOnCreditCard}
            type="text"
            name="3-digit-code"
            id="3-digit-code"
            maxLength={3}
          ></input>
          {creditCardSecurityCodeMessage !== "" && (
            <span className="span-error-message">
              {creditCardSecurityCodeMessage}
            </span>
          )}
          <br></br>
          <div className={styles["checkout-form-order-total"]}>
            <span>Order Total ${orderTotal.toFixed(2)}</span>
          </div>
          <br></br>
        </div>
      </div>
      <br></br>
      <div className={styles["checkout-form-button"]}>
        <HashLink className={styles["to-cart-button-link"]} smooth to="/cart">
          <div className={styles["to-cart-button"]}>&larr; back to cart</div>
        </HashLink>
        <div className={styles["place-order-button"]}>
          <button type="submit" aria-label="place-order">
            Place the Order
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      {orderTotal === 0 ? (
        <LinkButton
          message={
            "You are trying to checkout without adding items to cart first."
          }
          link={"/#menuSection"}
          buttonText={"Shop Here!"}
        ></LinkButton>
      ) : showSpinner === true ? (
        <Spinner></Spinner>
      ) : (
        form
      )}
    </React.Fragment>
  );
};

export default CheckoutForm;
