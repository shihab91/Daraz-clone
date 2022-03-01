import React from "react";
import { ProductsContainerStyles } from "styles/ProductsContainer.styles";
import ProductCard from "../common/ProductCard";

const ProudctsContainer = () => {
  return (
    <ProductsContainerStyles>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return <ProductCard />;
      })}
    </ProductsContainerStyles>
  );
};

export default ProudctsContainer;
