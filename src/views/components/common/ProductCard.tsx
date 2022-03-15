import React from "react";
import {
  Button,
  ProductCardWrapper,
  ProductImageWrapper,
} from "styles/ProductCard.styles";

//   product: IProduct;
//   product,
const ProductCard = ({
  onclick,
}: {
  onclick: (id: string | undefined) => void;
}) => {
  return (
    <ProductCardWrapper onClick={() => onclick("shihab")}>
      {/* <ProductCardWrapper> */}
      <ProductImageWrapper>
        <img src="https://source.unsplash.com/200x200" alt="" />
      </ProductImageWrapper>
      <div>
        <h4>product name</h4>
        <p>product price</p>
        <Button>Details</Button>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
