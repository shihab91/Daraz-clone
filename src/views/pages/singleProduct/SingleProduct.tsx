import useAPI from "hooks/useAPI";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_to_cart, remove_from_cart } from "redux/actions/cartAction";
import ProductService from "services/Product.service";
import { Button } from "styles/ProductCard.styles";
import { SingleProductImageWrapper } from "styles/singleProduct.styles";
const SingleProduct = () => {
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const { data: product } = useAPI<IProduct>(() =>
    ProductService.getProductDetailsById(id)
  );
  return (
    <div>
      <SingleProductImageWrapper>
        <img src="https://source.unsplash.com/200x200" alt="" />
      </SingleProductImageWrapper>
      <Button onClick={() => dispatch(add_to_cart(product as IProduct))}>
        Add to Cart
      </Button>
      <Button onClick={() => dispatch(remove_from_cart(id))}>
        Remove from cart
      </Button>
    </div>
  );
};

export default SingleProduct;
