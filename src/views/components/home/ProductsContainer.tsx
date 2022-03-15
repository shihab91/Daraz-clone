import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContainerStyles } from "styles/ProductsContainer.styles";
import ProductCard from "../common/ProductCard";

// const ProductsContainer = ({ products }: { products: IProduct[] }) => {
/* <ProductCard key={product._id} product={product} onclick={onclick} /> */
const ProductsContainer = () => {
  const navigate = useNavigate();
  const onclick = (id: string | undefined): void => {
    console.log(id);
    navigate("/products/" + id);
  };
  return (
    <ProductsContainerStyles>
      {[1, 2, 3, 4, 4, 4, 4, 4].map(() => {
        return <ProductCard onclick={onclick} />;
      })}
    </ProductsContainerStyles>
  );
};

export default ProductsContainer;
