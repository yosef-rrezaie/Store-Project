import React from "react";
import { useCart } from "./context/CartProvider";
import BasketCart from "./component/BasketCart";
import BasketSideBar from "./component/BasketSideBar";
import styles from "./CheckoutPage.module.css";
import EmptyBasket from "./component/EmptyBasket";
function CheckoutPage() {
  const [state, dispatch] = useCart();

  function clickHandler(type, payload) {
    dispatch({ type, payload });
  }
  return (
    <div>
      {state.selectedItems.length === 0 ? (
        <EmptyBasket />
      ) : (
        <div className={styles.container}>
          <BasketSideBar state={state} clickHandler={clickHandler} />
          <div className={styles.products}>
            {state.selectedItems.map((product) => (
              <BasketCart
                key={product.id}
                data={product}
                clickHandler={clickHandler}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
