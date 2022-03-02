import React, { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import ProductsContainer from "views/components/home/ProductsContainer";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <DSlider />
      <ProductsContainer products={products} />
    </div>
  );
};

export default Home;
