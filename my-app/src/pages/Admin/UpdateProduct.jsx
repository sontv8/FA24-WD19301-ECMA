import React, { useState } from "react";

const UpdateProduct = () => {
  const [inputValues, setInputValues] = useState({});
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
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" onInput={onHandleChange} name="name" />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" name="price" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" name="image" onInput={onHandleChange} />
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
