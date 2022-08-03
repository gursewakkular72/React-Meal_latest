import React from "react";
import styles from "../CSS/AddRemoveButtons.module.css";
import { increaseButton, decreaseButton } from "../Icons/Icons";
import { itemsSliceActions } from "../Store/store";
import { useDispatch, useSelector } from "react-redux";

const AddRemoveButton = (props) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const id = props.id;
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
      <button onClick={removeItem} className={styles.btn}>
        {decreaseButton}
      </button>
      <span className={styles["item-amount"]}>{count}</span>
      <button onClick={addItem} className={styles.btn}>
        {increaseButton}
      </button>
    </div>
  );
};

export default AddRemoveButton;
