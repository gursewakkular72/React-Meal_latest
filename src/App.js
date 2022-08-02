import React, { useState } from "react";

import LandingPage from "./Components/LandingPage.js";

import Card from "./Components/Card.js";
import Footer from "./Components/Footer.js";

import CheckoutForm from "./Components/CheckoutForm.js";

import Cart from "./Components/Cart.js";
import Navigation from "./Components/Navigation.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [animateClass, setAnimateClass] = useState("");

  const orderSubmitHandler = () => {
    setAnimateClass("order-success-message-animate");
  };

  const closeOrderSuccessMessageHandler = () => {
    setAnimateClass("");
  };

  return (
    <React.Fragment>
      <Navigation></Navigation>
      <main>
        <div className={`order-success-message-div ${animateClass}`}>
          <span className={"order-success-message"}>
            Your order was placed successfully.
          </span>
          <button
            onClick={closeOrderSuccessMessageHandler}
            className={"order-success-message-close-button"}
          >
            X
          </button>
        </div>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/" element={<Card></Card>}>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route
              path="/checkout"
              element={
                <CheckoutForm
                  orderSubmitHandler={orderSubmitHandler}
                ></CheckoutForm>
              }
            ></Route>
          </Route>
        </Routes>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
