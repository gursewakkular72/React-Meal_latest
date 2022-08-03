import React from "react";
import { useSelector } from "react-redux";
import styles from "../CSS/Cart.module.css";

import CartAddItemButton from "./CartAddItemButton";
import CartRemoveItemButton from "./CartRemoveItemButton";

import { HashLink } from "react-router-hash-link";
import LinkButton from "./LinkButton";

const Cart = (props) => {
  const items = useSelector((state) => state.items);
  const orderTotal = useSelector((state) => state.orderTotal);

  const cartItems = items.map((item) => {
    return (
      <tr key={item.id} className={styles["individual-items"]}>
        <td className={styles["item-name"]}>{item.name}</td>
        <td>${Number(item.price).toFixed(2)}</td>
        <td>x{item.count}</td>
        <td>
          <CartAddItemButton
            name={item.name}
            id={item.id}
            price={Number(item.price)}
            count={item.count}
          ></CartAddItemButton>
        </td>
        <td>
          <CartRemoveItemButton
            name={item.name}
            id={item.id}
            price={item.price}
            count={item.count}
          ></CartRemoveItemButton>
        </td>
        <td>${Number(item.price * item.count).toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      {cartItems.length === 0 ? (
        <LinkButton
          message={"it seems, your cart is empty."}
          link={"/#menuSection"}
          buttonText={"Shop Here!"}
        ></LinkButton>
      ) : (
        <div className={styles["div-cart"]}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.heading}>
                <th colSpan={5}>Your Food</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.header}>
                <td>Item</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              {cartItems}
            </tbody>
            <tfoot>
              <tr className={styles["total-row"]}>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td className={styles.total}>Total</td>
                <td>${Number(orderTotal).toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <div className={styles["div-buttons"]}>
            <HashLink
              className={styles["go-back-button-link"]}
              smooth
              to="/#menuSection"
            >
              <div className={styles["go-back-button"]}>
                &larr; back to shop
              </div>
            </HashLink>

            <HashLink className={styles["close-button-link"]} to="/checkout">
              <div className={styles["checkout-button"]}>Checkout &rarr;</div>
            </HashLink>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
