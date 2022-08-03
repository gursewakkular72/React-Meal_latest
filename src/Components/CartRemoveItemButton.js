import React from "react";
import { useDispatch } from "react-redux";
import { decreaseButton } from "../Icons/Icons";
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
    <button onClick={removeItemsHandler} className={styles.button}>
      {decreaseButton}
    </button>
  );
};

export default CartRemoveItemButton;
