import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = (props) => {
  console.log(props);
  /*
    {
      products: [{},{}]
    }
  */

  return (
    <>
      <Header />
      <main>
        <h2>Danh sách sản phẩm</h2>

        {/* <a href="/admin/products/add">
          <button>Thêm mới sản phẩm</button>
        </a> */}
        <Link to={"/admin/products/add"}>
          <button>Thêm mới sản phẩm</button>
        </Link>

        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Ảnh sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((item, index) => {
              // console.log(item);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} alt="" style={{ width: 400 }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => props.onRemove(item.id)}>Xoá</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default ProductList;

/*
  Props
    Object
    {
      property: value
    }
*/
/*
  Xoá sản phẩm

  B1: bắt sự kiện onClick cho button xoá
  B2: khi click vào button xoá thì gọi hàm onRemove 
    (hàm này được tạo trong component App và truyền xuống thông qua props)
  B3: truyền id của sản phẩm cần xoá lên hàm onRemove ở component App
*/
