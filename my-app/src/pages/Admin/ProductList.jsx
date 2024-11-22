import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = (props) => {
  console.log(props.products);
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
        {props.products.map((item) => {
          console.log(item);

          return (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          );
        })}
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
