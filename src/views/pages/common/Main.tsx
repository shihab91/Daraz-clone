import axios from "axios";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "styles/GlobalStyles";
import SingleProduct from "../singleProduct/SingleProduct";
// import Home from "../home/Home";
const Home = React.lazy(() => import("../home/Home"));

axios.get("htts://api.google.com/products");
function Main() {
  return (
    <Container>
      <Suspense fallback={<>Loading....</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<SingleProduct />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default Main;
