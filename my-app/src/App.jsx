import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/Admin/ProductList";
import AddProduct from "./pages/Admin/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const products = [
    {
      id: "1",
      name: "Sản phẩm 1",
      price: 1000,
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_19.jpg",
    },
    {
      id: "2",
      name: "Sản phẩm 2",
      price: 2000,
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_68.jpg",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/products"
            element={<ProductList products={products} />}
          />
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
