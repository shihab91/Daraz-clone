// import useAPI from "hooks/useAPI";
import React from "react";
// import ProductCard from "views/components/common/ProductCard";
// import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import ProductsContainer from "views/components/home/ProductsContainer";
// import ProductsContainer from "views/components/home/ProductsContainer";

const Home = () => {
  // const [products, setProducts] = useState<[] | IProduct[]>([]);
  // useEffect(() => {
  //   ProductService.getAllProducts()
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err.message));
  // }, []);
  // const { data: products } = useAPI<IProduct[] | boolean>(
  //   ProductService.getAllProducts
  // );
  return (
    <div>
      <DSlider />
      {/* {products && <ProductsContainer products={products} />} */}
      <ProductsContainer></ProductsContainer>
    </div>
  );
};

export default Home;
