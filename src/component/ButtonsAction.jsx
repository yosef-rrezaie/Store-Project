import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../context/CartProvider";

function ButtonsAction({ count, setCount, data }) {
  const [state, dispatch] = useCart();

  function plusHandler() {
    setCount(count + 1);
    dispatch({ type: "INCREASE", payload: data });
  }

  function minusHandler() {
    if (count >= 0) {
      setCount(count - 1);
      dispatch({ type: "DECREASE", payload: data });
    }
  }

  function deleteHandler() {
    setCount(0);
    dispatch({ type: "REMOVE_ITEM", payload: data });
  }
  return (
    <div>
      <button>
        {count === 1 ? (
          <TbShoppingBagCheck onClick={deleteHandler} />
        ) : (
          <FaMinus onClick={minusHandler} />
        )}
      </button>
      <span>{count}</span>
      <button onClick={plusHandler}>
        <FaPlus />
      </button>
    </div>
  );
}

export default ButtonsAction;
