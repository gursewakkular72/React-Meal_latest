import React, { useState, useEffect } from "react";
import { items } from "../Data/data.js";
import styles from "../CSS/Menu.module.css";
import { ratingIcon } from "../Icons/Icons";
import { useSelector } from "react-redux";
import AddRemoveButton from "./AddRemoveButtons.js";
import useHttp from "../CustomHooks/use-http.js";
import Spinner from "./Spinner.js";
import Error from "./Error.js";

const Menu = () => {
  // const [numberOfitems, setNumberOfItems] = useState(0);
  const { isLoading, error, dishes, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest("https://router-da674-default-rtdb.firebaseio.com/items.json");
  }, [sendRequest]);

  const menuItems =
    dishes !== null
      ? dishes.map((item) => {
          return (
            <div className={styles["div-menu-section1"]} key={item.id}>
              <div className={styles["div-menu-image-container"]}>
                <img className={styles.image} src={item.image}></img>
              </div>
              <div className={styles["div-menu-sub-section1"]}>
                <span className={styles["item-rating"]}>
                  {ratingIcon}
                  {"   "}
                  {item.rating}
                </span>

                <h3 className={styles["restaurant-name"]}>
                  {item["restaurant-name"]}
                </h3>

                <h4 className={styles["item-name"]}>{item.name}</h4>
                <p className={styles["item-description"]}>{item.description}</p>
                <span className={styles["chef-name"]}>Chef {item.chef}</span>
                <span className={styles["item-price"]}>${item.price}</span>

                <AddRemoveButton
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  // count={item.count}
                ></AddRemoveButton>
              </div>
            </div>
          );
        })
      : [];

  return (
    <React.Fragment>
      {error && <Error message={error}></Error>}
      {isLoading && <Spinner></Spinner>}
      {!isLoading && !error && (
        <div className={styles["div-menu"]} id="menuSection">
          {menuItems}
        </div>
      )}
      {/* <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img> */}
    </React.Fragment>
  );
};

export default Menu;
