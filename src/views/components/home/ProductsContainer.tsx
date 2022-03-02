import React from "react";
import { ProductsContainerStyles } from "styles/ProductsContainer.styles";
import ProductCard from "../common/ProductCard";

const ProductsContainer = ({ products }: { products: any[] }) => {
  return (
    <ProductsContainerStyles>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </ProductsContainerStyles>
  );
};

export default ProductsContainer;
