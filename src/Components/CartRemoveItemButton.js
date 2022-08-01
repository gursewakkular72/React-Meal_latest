import React from "react";
import { useDispatch } from "react-redux";
import { increaseButton, decreaseButton, closeButton } from "../Icons/Icons";
import { itemsSliceActions } from "../Store/store";
import styles from "../CSS/CartAddReomveItemButton.module.css";

const CartRemoveItemButton = (props) => {
  const dispatch = useDispatch();
  const removeItemsHandler = () => {
    dispatch(
      itemsSliceActions.removeItem({
        name: props.name,
        price: props.price,
        id: props.id,
        count: props.count,
      })
    );
  };
  return (
    <React.Fragment>
      <button onClick={removeItemsHandler} className={styles.button}>
        {decreaseButton}
      </button>
    </React.Fragment>
  );
};

export default CartRemoveItemButton;
