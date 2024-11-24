import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/Admin/ProductList";
import AddProduct from "./pages/Admin/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const data = [
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

  const [products, setProducts] = useState(data);
  // console.log("Vua moi lam xong: ", products);

  const onRemove = (id) => {
    if (confirm("Bạn có chắc chắn muốn xoá không?")) {
      const newData = products.filter((item) => {
        return item.id != id;
      });
      setProducts(newData);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/products"
            element={<ProductList products={products} onRemove={onRemove} />}
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
