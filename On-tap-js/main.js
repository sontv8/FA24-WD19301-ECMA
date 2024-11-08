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

function hello() {
  console.log("Xin chao cac ban!");
}
hello();

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

const sum = (a = 1, b = 2) => a + b;

console.log(sum(100, 200));
