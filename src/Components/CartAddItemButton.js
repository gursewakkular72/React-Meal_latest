import React from "react";
import { useDispatch } from "react-redux";
import { increaseButton } from "../Icons/Icons";
import { itemsSliceActions } from "../Store/store";
import styles from "../CSS/CartAddReomveItemButton.module.css";

const CartAddItemButton = (props) => {
  const dispatch = useDispatch();
  const addItemsHandler = () => {
    dispatch(
      itemsSliceActions.addItem({
        name: props.name,
        price: props.price,
        id: props.id,
        count: props.count,
      })
    );
  };
  return (
    <button onClick={addItemsHandler} className={styles.button}>
      {increaseButton}
    </button>
  );
};

export default CartAddItemButton;
