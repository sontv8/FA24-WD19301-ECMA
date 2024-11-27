import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/Admin/ProductList";
import AddProduct from "./pages/Admin/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const onRemove = (id) => {
    if (confirm("Bạn có chắc chắn muốn xoá không?")) {
      const newData = products.filter((item) => {
        return item.id != id;
      });
      setProducts(newData);
    }
  };
  const onAdd = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
  return (
    <>
      <Routes>
        <Route
          path="/admin/products"
          element={<ProductList products={products} onRemove={onRemove} />}
        />
        <Route
          path="/admin/products/add"
          element={<AddProduct onAdd={onAdd} />}
        />
      </Routes>
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
