import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./CheckoutPage";
import PagesNotFound from "./pages/PagesNotFound";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PagesNotFound />} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
