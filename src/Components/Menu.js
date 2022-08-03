import React, { useEffect } from "react";
import styles from "../CSS/Menu.module.css";
import { ratingIcon } from "../Icons/Icons";
import AddRemoveButton from "./AddRemoveButtons.js";
import useHttp from "../CustomHooks/use-http.js";
import Spinner from "./Spinner.js";
import Error from "./Error.js";
import { FETCH_URL } from "../JS/config";

const Menu = () => {
  const { isLoading, error, dishes, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(FETCH_URL);
  }, [sendRequest]);

  const menuItems =
    dishes !== null
      ? dishes.map((item) => {
          return (
            <div className={styles["div-menu-section1"]} key={item.id}>
              <div className={styles["div-menu-image-container"]}>
                <img
                  className={styles.image}
                  alt={"food-item"}
                  src={item.image}
                ></img>
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
    </React.Fragment>
  );
};

export default Menu;
