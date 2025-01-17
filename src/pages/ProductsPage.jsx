import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";
import Card from "../component/Card";
import Loader from "../component/Loader";
import {
  searchProducts,
  filterProducts,
  createQueryObject,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../component/SearchBox";
import SideBar from "../component/SideBar";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]); // keep datils without send request to server
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    console.log(products);
    setDisplayed(products);
    const query = {};
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) query.category = category;
    if (search) query.search = search;
    setQuery(query);
    setSearch(query.search || "");
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  return (
    <>
      {products.length ? (
        <div>
          <SearchBox
            search={search}
            setSearch={setSearch}
            setQuery={setQuery}
          />
          <div className={styles.container}>
            <div className={styles.products}>
              {displayed.map((p) => (
                <Card key={p.id} data={p} />
              ))}
            </div>
            <SideBar setQuery={setQuery} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductsPage;
