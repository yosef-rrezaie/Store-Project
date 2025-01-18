import { Children, createContext, useReducer } from "react";

const CartContext = createContext();
const initialState = {};
const reducer = () => {};

function CartProvider({ chlidren }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={state}>{Children}</CartContext.Provider>;
}

export default CartProvider;
