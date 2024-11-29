import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [inputValues, setInputValues] = useState({});

  const id = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id.id}`)
      .then((response) => response.json())
      .then((data) => setInputValues(data));
  }, []);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValues({ ...inputValues, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      {JSON.stringify(inputValues)}
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            onInput={onHandleChange}
            name="name"
            defaultValue={inputValues.name}
          />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            onInput={onHandleChange}
            defaultValue={inputValues.price}
          />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="image"
            onInput={onHandleChange}
            defaultValue={inputValues.image}
          />
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
