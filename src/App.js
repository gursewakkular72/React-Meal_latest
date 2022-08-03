import React, { useState } from "react";
import LandingPage from "./Components/LandingPage.js";
import Card from "./Components/Card.js";
import Footer from "./Components/Footer.js";
import CheckoutForm from "./Components/CheckoutForm.js";
import Page404 from "./Components/Page404.js";
import Cart from "./Components/Cart.js";
import Navigation from "./Components/Navigation.js";
import { Routes, Route } from "react-router-dom";
import OrderSuccessMessage from "./Components/OrderSuccessMessage.js";

function App() {
  //state for displaying and hiding order success message
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
        <OrderSuccessMessage
          animateClass={animateClass}
          closeOrderSuccessMessageHandler={closeOrderSuccessMessageHandler}
        ></OrderSuccessMessage>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/" element={<Card></Card>}>
            <Route path="/cart" element={<Cart></Cart>}>
              <Route path="*" element={<Page404></Page404>}></Route>
            </Route>
            <Route
              path="/checkout"
              element={
                <CheckoutForm
                  orderSubmitHandler={orderSubmitHandler}
                ></CheckoutForm>
              }
            ></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
          </Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
