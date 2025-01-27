import React from "react";
import { TbBasketExclamation } from "react-icons/tb";
import styles from "./EmptyBasket.module.css";

function EmptyBasket() {
  return (
    <div className={styles.basket}>
      <p>Your basket is empty</p>
      <TbBasketExclamation />
    </div>
  );
}

export default EmptyBasket;
