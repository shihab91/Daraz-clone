import React from "react";
import Footer from "views/pages/common/Footer";
import Header from "views/pages/common/Header";
import Main from "views/pages/common/Main";

export const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Main />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
