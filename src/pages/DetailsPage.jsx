import React from "react";
import { useParams } from "react-router-dom";
import { useProductsDetails } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { SiOpenproject } from "react-icons/si";

import styles from "./DetailsPage.module.css";
import Loader from "../component/Loader";

function DetailsPage() {
  const { id } = useParams();
  
  const productDetails = useProductsDetails(+id);
  if (!productDetails) return <Loader></Loader>;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
