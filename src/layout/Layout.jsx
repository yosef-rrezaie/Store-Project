import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartProvider";
import styles from "./Layout.module.css";
import { useProducts } from "../context/ProductsProvider";
import Loader from "../component/Loader";

function Layout({ children }) {
  const [state] = useCart();
  const products = useProducts();
  return (
    <>
      {products.length ? (
        <div>
          <header className={styles.header}>
            <Link to="/products">555</Link>
            <Link to="/checkout">
              <div>
                <PiShoppingCartSimpleBold />
                {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
              </div>
            </Link>
          </header>
          {children}
          <footer className={styles.footer}>
            <p>Developed by Yosef Rezaie with love</p>
          </footer>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Layout;
