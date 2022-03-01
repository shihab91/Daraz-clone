import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "styles/GlobalStyles";
import Home from "../home/Home";
// const Home = React.lazy(() => import("../home/Home"));

axios.get("htts://api.google.com/products");
function Main() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Main;
