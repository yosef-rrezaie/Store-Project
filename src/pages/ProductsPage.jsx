import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";
import Card from "../component/Card";
import Loader from "../component/Loader";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { searchProducts, filterProducts } from "../helper/helper";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]); // keep datils without send request to server
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  useEffect(() => {
    setDisplayed(products);
  }, [products]);
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search: search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => ({ ...query, category: category }));
  };

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  return (
    <>
      {products.length ? (
        <div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            />
            <button onClick={searchHandler}>
              <ImSearch />
            </button>
          </div>
          <div className={styles.container}>
            <div className={styles.products}>
              {displayed.map((p) => (
                <Card key={p.id} data={p} />
              ))}
            </div>
            <div>
              <div>
                <FaListUl />
                <p>Catogories</p>
              </div>
              <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductsPage;
