import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import styles from "./Card.module.css";
import { useCart } from "../context/CartProvider";
import ButtonsAction from "./ButtonsAction";

function Card({ data }) {
  const [state, dispatch] = useCart();
  const [count, setCount] = useState(0);
  console.log(state)
  const clickHandler = () => {
    if (count === 0) {
      console.log(state);
      dispatch({ type: "ADD_ITEM", payload: data });
      setCount(count + 1);
    }
  };
  const { id, title, image, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>

          {count >= 1 ? (
            <ButtonsAction count={count} setCount={setCount} data={data}/>
          ) : (
            <button onClick={clickHandler}>
              <TbShoppingBagCheck />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
