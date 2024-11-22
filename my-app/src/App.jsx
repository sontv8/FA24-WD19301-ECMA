import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/Admin/ProductList";
import AddProduct from "./pages/Admin/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
Client 
  Trang chủ
  Trang sản phẩm
  Trang chi tiết sản phẩm
  ...
Admin
  ProductList     /admin/products
  AddProduct      /admin/products/add
  UpdateProduct
  DetailProduct


*/
