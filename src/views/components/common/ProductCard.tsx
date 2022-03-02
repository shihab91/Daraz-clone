import React from "react";
import {
  ProductCardWrapper,
  ProductImageWrapper,
} from "styles/ProductCard.styles";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <img src="https://source.unsplash.com/200x200" alt="" />
      </ProductImageWrapper>
      <div>
        <h4>product name</h4>
        <p>product price</p>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
