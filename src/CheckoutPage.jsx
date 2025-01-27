import React from "react";
import { useCart } from "./context/CartProvider";
import BasketCart from "./component/BasketCart";
import BasketSideBar from "./component/BasketSideBar";
import styles from "./CheckoutPage.module.css";
function CheckoutPage() {
  const [state, dispatch] = useCart();

  function clickHandler(type, payload) {
    dispatch({ type, payload });
  }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>No products yet</p>
        ) : null}
        {state.selectedItems.map((product) => (
          <BasketCart
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
