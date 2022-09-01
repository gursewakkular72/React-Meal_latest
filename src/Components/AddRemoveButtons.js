import React from "react";
import styles from "../CSS/AddRemoveButtons.module.css";
import { increaseButton, decreaseButton } from "../Icons/Icons";
import { itemsSliceActions } from "../Store/store";
import { useDispatch, useSelector } from "react-redux";

const AddRemoveButton = (props) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const id = props.id;
  // the "count" variable keeps track of the amount of an individual item in the cart (its the number between "+" and "-" button in the menu).
  // My concern is I am not using the useState() hook to implement this. I tried to use it, but doing so was re-rendering this component every time and causing my app to crash.
  // So instead I used a regular variable. Is it appropriate to use a regular js variable instead of using a state here ?
  let count = 0;

  const addItem = () => {
    dispatch(
      itemsSliceActions.addItem({
        name: props.name,
        price: props.price,
        id: props.id,
        count: 0,
      })
    );
  };

  const removeItem = () => {
    dispatch(
      itemsSliceActions.removeItem({
        name: props.name,
        price: props.price,
        id: props.id,
      })
    );
  };

  const indexOfAddedItem = items.findIndex((item) => item.id === id);

  if (indexOfAddedItem !== -1) {
    count = items[indexOfAddedItem].count;
  }

  return (
    <div className={styles["add-remove-buttons"]}>
      <button
        onClick={removeItem}
        className={styles.btn}
        aria-label="remove-items"
      >
        {decreaseButton}
      </button>
      <span className={styles["item-amount"]}>{count}</span>
      <button onClick={addItem} className={styles.btn} aria-label="add-item">
        {increaseButton}
      </button>
    </div>
  );
};

export default AddRemoveButton;
