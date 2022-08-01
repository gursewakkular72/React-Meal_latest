import React, { useReducer, useState } from "react";
// import { act } from "react-dom/test-utils";

const initalState = {
  isEmailValid: false,
  isPasswordValid: false,
  isfnameValid: false,
  islnameValid: false,
  isCheckOutEmailValid: false,
  isPhoneNumberValid: false,
  isUnitValid: false,
  isHouseNumberValid: false,
  isStreetAddressValid: false,
  isCityValid: false,
  isProvinceValid: false,
  isPostalCodeValid: false,
  isCardCardNumberValid: false,
  isNameOnCreditCardValid: false,
  isCreditCardExpiryValid: false,
  isCreditCardSecurityCodeValid: false,
  fnameMessage: "",
  lnameMessage: "",
  checkoutEmailMessage: "",
  phoneNumberMessage: "",
  unitMessage: "",
  houseNumberMessage: "",
  streetAddressMessage: "",
  cityMessage: "",
  provinceMessage: "",
  postalCodeMessage: "",
  emailMessage: "",
  passworMessage: "",
  creditCardNumberMessage: "",
  nameOnCreditCardMessage: "",
  creditCardExpiryMessage: "",
  creditCardSecurityCodeMessage: "",
};

const reducer = (prevState, action) => {
  let emailMessage = "";
  let passworMessage = "";
  if (action.type === "login-form") {
    const isEmailValid = action.payload.email.includes("@");
    if (!isEmailValid) emailMessage = "email is invalid.";
    const isPasswordValid =
      action.payload.password.length > 8 ||
      action.payload.password.length === 8;
    if (!isPasswordValid) passworMessage = "password must have 8 characters";

    return {
      isEmailValid,
      isPasswordValid,
      emailMessage,
      passworMessage,
    };
  }

  if (action.type === "checkout-form") {
    let fnameMessage = "";
    let lnameMessage = "";
    let checkoutEmailMessage = "";
    let phoneNumberMessage = "";
    let houseNumberMessage = "";
    let cityMessage = "";
    let streetAddressMessage = "";
    let provinceMessage = "";
    let postalCodeMessage = "";
    let creditCardNumberMessage = "";
    let nameOnCreditCardMessage = "";
    let creditCardExpiryMessage = "";
    let creditCardSecurityCodeMessage = "";
    const isfnameValid = action.payload.fname.length >= 2;
    if (!isfnameValid)
      fnameMessage = "First name should be atleast 2 characters long";
    const islnameValid = action.payload.lname.length >= 2;
    if (!islnameValid)
      lnameMessage = "Last name should be atleast 2 characters long";

    const isCheckoutEmailValid =
      action.payload.checkoutEmail.trim().length === 0
        ? false
        : action.payload.checkoutEmail.includes("@");
    // console.log("chekcout email :", isCheckoutEmailValid);

    if (!isCheckoutEmailValid) checkoutEmailMessage = "email is invalid.";
    const isPhoneNumberValid = action.payload.phoneNumber.length === 10;
    if (!isPhoneNumberValid)
      phoneNumberMessage =
        "Phone number should have 10 digits, you do not the country code.";
    const isHouseNumberValid = action.payload.houseNumber.length !== 0;

    if (!isHouseNumberValid)
      houseNumberMessage = "House Number should have at least one character.";

    const isStreetAddressValid = action.payload.streetAddress.length >= 3;

    if (!isStreetAddressValid)
      streetAddressMessage = "Street Address must have alteast 3 characters";
    const isCityValid = action.payload.city.length >= 2;
    if (!isCityValid) cityMessage = "city name must have atleast 2 characters";
    const isProvinceValid = action.payload.province.length !== 0;

    if (!isProvinceValid) provinceMessage = "Please Select a province.";
    const isPostalCodeValid = action.payload.postalCode.length >= 7;
    if (!isPostalCodeValid)
      postalCodeMessage = "Please enter a valid postal code";

    // Credit Card info validation starts here.

    const isCardCardNumberValid = action.payload.creditCardNumber.length === 19;
    if (!isCardCardNumberValid)
      creditCardNumberMessage = "Please enter a valid card number";
    console.log("number on the credit", action.payload.creditCardNumber);
    const isNameOnCreditCardValid = action.payload.nameOnCreditCard.length >= 2;
    if (!isNameOnCreditCardValid)
      nameOnCreditCardMessage =
        "Name on the credit card should have atleast two characters";
    const isCreditCardExpiryValid =
      action.payload.expiryOnCreditCard.length === 5;
    if (!isCreditCardExpiryValid)
      creditCardExpiryMessage =
        "Please enter a valid expiry date. It should be in the format: DD/YY";
    const isCreditCardSecurityCodeValid =
      action.payload.codeOnCreditCard.length === 3;
    if (!isCreditCardSecurityCodeValid)
      creditCardSecurityCodeMessage =
        "Please enter a valid security code. It should have at least 3 digits";

    return {
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
    };
  }

  if ((action.type = "reset-form")) {
    return {
      isfnameValid: false,
      fnameMessage: "",
      islnameValid: false,
      lnameMessage: "",
      isCheckoutEmailValid: false,
      checkoutEmailMessage: "",
      isPhoneNumberValid: false,
      phoneNumberMessage: "",
      isHouseNumberValid: false,
      houseNumberMessage: "",
      isStreetAddressValid: false,
      streetAddressMessage: "",
      isCityValid: false,
      cityMessage: "",
      isProvinceValid: false,
      provinceMessage: "",
      isPostalCodeValid: false,
      postalCodeMessage: "",
      isCardCardNumberValid: false,
      creditCardNumberMessage: "",
      isNameOnCreditCardValid: false,
      nameOnCreditCardMessage: "",
      isCreditCardExpiryValid: false,
      creditCardExpiryMessage: "",
      isCreditCardSecurityCodeValid: false,
      creditCardSecurityCodeMessage: "",
    };
  }
};

const useValidation = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const submitHandler = (type, payload) => {
    dispatch(type, payload);
  };

  const resetForm = (type) => {
    dispatch(type);
  };

  return {
    isEmailValid: state.isEmailValid,
    isPasswordValid: state.isPasswordValid,
    emailMessage: state.emailMessage,
    passworMessage: state.passworMessage,
    isfnameValid: state.isfnameValid,
    fnameMessage: state.fnameMessage,
    islnameValid: state.islnameValid,
    lnameMessage: state.lnameMessage,
    isCheckoutEmailValid: state.isCheckoutEmailValid,
    checkoutEmailMessage: state.checkoutEmailMessage,
    isPhoneNumberValid: state.isPhoneNumberValid,
    phoneNumberMessage: state.phoneNumberMessage,
    isHouseNumberValid: state.isHouseNumberValid,
    houseNumberMessage: state.houseNumberMessage,
    isStreetAddressValid: state.isStreetAddressValid,
    streetAddressMessage: state.streetAddressMessage,
    isCityValid: state.isCityValid,
    cityMessage: state.cityMessage,
    isProvinceValid: state.isProvinceValid,
    provinceMessage: state.provinceMessage,
    isPostalCodeValid: state.isPostalCodeValid,
    postalCodeMessage: state.postalCodeMessage,
    isCardCardNumberValid: state.isCardCardNumberValid,
    creditCardNumberMessage: state.creditCardNumberMessage,
    isNameOnCreditCardValid: state.isNameOnCreditCardValid,
    nameOnCreditCardMessage: state.nameOnCreditCardMessage,
    isCreditCardExpiryValid: state.isCreditCardExpiryValid,
    creditCardExpiryMessage: state.creditCardExpiryMessage,
    isCreditCardSecurityCodeValid: state.isCreditCardSecurityCodeValid,
    creditCardSecurityCodeMessage: state.creditCardSecurityCodeMessage,

    submitHandler,
    resetForm,
  };
};

export default useValidation;
