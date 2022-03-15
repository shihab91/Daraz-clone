import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import { TheLayout } from "views/pages/TheLayout";
import "./App.css";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <TheLayout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
