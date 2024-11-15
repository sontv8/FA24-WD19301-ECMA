/*
    Ôn tập kiến thức Js cơ bản
    1. Function
        - khởi tạo hàm
            Cú pháp: function <tên_hàm>(){}
        - các kiểu hàm trong js
            - hàm không có tham số và không có giá trị trả về
            - hàm không có tham số và  có giá trị trả về
            - hàm  có tham số và không có giá trị trả về
                tham số: giống như biến, được truyền vào trong hàm khi khởi tạo hàm
                đối số: là giá trị truyền vào hàm khi gọi hàm ra thực thi
            - hàm  có tham số và có giá trị trả về
        - arrow function
        - default params
    
*/

// function hello() {
//   console.log("Xin chao cac ban!");
// }
// hello();

// function sum() {
//   const a = 50;
//   const b = 100;
//   const result = a + b;
//   return result;
// }

// const tienDanhDe = sum() * 70;
// console.log(tienDanhDe);

// function sum(a, b) {
//   const result = a + b;
//   return result;
// }
// console.log(sum(10, 20));

// const sum = (a = 1, b = 2) => a + b;

// console.log(sum(100, 200));

/*
2. Array
    - khởi tạo mảng
    - các phương thức xử lý mảng
        cơ bản:
            - length()
            - push()
            - pop()
            - join()
            - toString()
            - concat()
            - splice()
            - indexOf()
            - includes()
        nâng cao:
            - map
            - filter
            - find
    - sự khác nhau giữa function và method
*/

// const products = new Array("Iphone", "Samsung", "Xiaomi", "Oppo");

// const products = ["Iphone", 100, true];
//                    0      1     2
// index - chỉ mục

// console.log(products.length);
// products.push("Samsung");
// console.log(products.join("-"));
// console.log(products.toString("-"));

// const fruits = ["Cam", "Xoai", "Dua"];
// const vegetables = ["Cai", "Ca chua", "Rau muong"];

// const foods = fruits.concat(vegetables);
// console.log(foods);

// method - phương thức
// function - hàm

// console.log(fruits.indexOf("Xoai"));

// const fruits = ["Cam", "Xoai", "Dua"];

// fruits.splice(fruits.length, 0, "Tao", "Nho");
// fruits.splice(0, 1, "Oi");
// fruits.splice(0, 1);
// console.log(fruits);

// const products = ["iphone", "samsung", "xiaomi", "oppo"];

// const addProduct = () => {
//   const newProduct = prompt("Nhap ten san pham");
//   products.push(newProduct);
//   console.log(products);
// };
// addProduct();
// const updateProduct = () => {};
// const deleteProduct = () => {};

// const products = ["iphone", "samsung", "xiaomi", "oppo"];

// for (let item of products) {
//   console.log(item);

//   // khối lệnh
// }

// function
// method

// products.forEach((item, index) => {});

// const car = new Object();
// const car = {
//   name: "BMW",
//   color: "white",
//   drive: () => {
//     console.log("Bạn đang đua xe");
//   },
// };
// console.log(car.color);
// car.color = "black";
// console.log(car);
// car.drive();

// console.log(document.querySelector(".title"));
// const title = document.querySelector(".title");
// title.innerHTML = "Buồn ngủ quá rồi";
// title.className = "abcd";

const product = {
  image:
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_34.jpg",
  name: "Seraphine",
  price: 1000,
  description: "Champion hỗ trợ",
};

// const productImage = document.querySelector("#image");
// const productName = document.querySelector("#product-name");
// const price = document.querySelector("#price");
// const desc = document.querySelector("#desc");

// productImage.src = product.image;
// productName.innerHTML = product.name;
// price.innerHTML = product.price;
// desc.innerHTML = product.description;

// cách 2
const productDiv = document.querySelector("#products");
// productDiv.innerHTML =
//   "<img src='" +
//   product.image +
//   "' alt='' id='image' />" +
//   "<h2>" +
//   product.name +
//   "</h2>" +
//   "<p>" +
//   product.price +
//   "</p>" +
//   "<p>" +
//   product.description +
//   "</p>";

productDiv.innerHTML = `
    <img src=${product.image} alt="" id="image" />
    <h2 id="product-name">${product.name}</h2>
    <p id="price">${product.price}</p>
    <p id="desc">${product.description}</p>
`;

const products = [
  {
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_34.jpg",
    name: "Seraphine",
    price: 1000,
    description: "Champion hỗ trợ",
  },
  {
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_34.jpg",
    name: "Seraphine",
    price: 1000,
    description: "Champion hỗ trợ",
  },
  {
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_34.jpg",
    name: "Seraphine",
    price: 1000,
    description: "Champion hỗ trợ",
  },
];
