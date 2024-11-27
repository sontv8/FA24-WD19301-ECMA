import React, { useState } from "react";

const AddProduct = (props) => {
  const [inputValues, setInputValues] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValues({ ...inputValues, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValues);
  };

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      {JSON.stringify(inputValues)}
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
  B5: Khi người dùng submit form thì gọi hàm onHandleSubmit
  B6: onHandleSubmit sẽ gọi hàm onAdd(hàm này được tạo trên 
  component App và truyền xuống component AddProduct thông qua 
  property là onAdd) và truyền vào inputValues
  B7: Hàm onAdd sẽ thực hiện việc gọi API để thêm mới sản phẩm
*/
