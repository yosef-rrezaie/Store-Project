import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./CheckoutPage";
import PagesNotFound from "./pages/PagesNotFound";
import api from "./services/config";

function App() {
  useEffect(() => {
    api.get("products").then((res) => console.log(res));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PagesNotFound />} />
    </Routes>
  );
}

export default App;
