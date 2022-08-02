import React from "react";
import ReactDOM from "react-dom";

const Message = (props) => {
  return (
    <div className={`order-success-message-div ${props.animateClass}`}>
      <span className={"order-success-message"}>
        Your order was placed successfully.
      </span>
      <button
        onClick={props.closeOrderSuccessMessageHandler}
        className={"order-success-message-close-button"}
      >
        X
      </button>
    </div>
  );
};

const OrderSuccessMessage = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Message
          animateClass={props.animateClass}
          closeOrderSuccessMessageHandler={
            props.closeOrderSuccessMessageHandler
          }
        ></Message>,
        document.getElementById("order-success-message")
      )}
    </React.Fragment>
  );
};

export default OrderSuccessMessage;
