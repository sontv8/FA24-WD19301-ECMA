import React, { useState } from "react";

const AddProduct = () => {
  const [inputValues, setInputValues] = useState({});
  const onHandleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    const { name, value } = e.target;
    console.log(name, value);

    // const newProduct = { name: value };
    // setInputValues(newProduct);
    setInputValues({ name: value });
  };

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      {JSON.stringify(inputValues)}
      <form>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" onInput={onHandleChange} name="name" />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" />
        </div>
        <button>Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;

/*
  B1: tạo form thêm mới
  B2: bắt sự kiện onChange hoặc onInput cho input
  B3: sự kiện onChange hoặc onInput sẽ gọi hàm onHandleChange
  B4: onHandleChange sẽ lấy giá trị của input và set lại state inputValues
*/
