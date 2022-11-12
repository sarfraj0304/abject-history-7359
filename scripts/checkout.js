import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("estimatedTotal"));

let itemsData = JSON.parse(localStorage.getItem("addToBasket"));

let nameofData = [];
itemsData.forEach((el) => {
  nameofData.push(el.productName);
});

document.getElementById("price").innerText = `${"$" + data}`;
document.getElementById("pric").innerText = `${"$" + data}`;

let saveBtn = document.getElementById("saveBtn");

//save details

saveBtn.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname == "" || number == "" || address == "") {
    alert("Fill Details");
  } else {
    let obj = {
      fname,
      lname,
      number,
      address,
      price: data,
      productName: nameofData,
      date: new Date().toLocaleString(),
      //   please sachin bhai add krdena
      // cart items add and price
    };
    localStorage.setItem("shipping_details", JSON.stringify(obj));

    alert("Your Details is saved");
    alert("Please choose payment option");
  }
};

const customer_detail = async () => {
  let obj = JSON.parse(localStorage.getItem("shipping_details"));
  let res = await fetch("http://localhost:3000/order_details", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

let payCashBtn = document.getElementById("payCashBtn");
payCashBtn.style.cursor = "pointer";

const payOnlineBtn = document.getElementById("payOnlineBtn");
payOnlineBtn.style.cursor = "pointer";
payOnlineBtn.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname === "" || address == "" || number == "") {
    alert("Please fill the details");
  } else {
    location.href = "./payment.html";
  }
};

payCashBtn.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname === "" || address == "" || number == "") {
    alert("Please fill the details");
  } else {
    alert("OTP is sent on Number");
    let input_Otp = prompt("Enter otp");
    if (input_Otp != null) {
      if (input_Otp == "12345") {
        alert("Your order is placed");
        customer_detail();
      } else {
        alert("Worng otp");
      }
    }
  }
};
let apply_btn = document.getElementById("apl");

apply_btn.onclick = async () => {
  let res = await fetch(`http://localhost:3000/discounts`);
  let finalData = await res.json();
  discount(finalData);
};
const discount = (data_1) => {
  let flag = false;
  let flag2 = false;
  let discount_price;
  let promo_code = document.getElementById("promo").value;
  data_1.forEach(({ active, code, amount }) => {
    if (promo_code == code) {
      flag2 = true;
      if (active == true) {
        flag = true;
        discount_price = amount;
      }
    }
  });
  if (flag2 == true && flag == true) {
    document.getElementById("dscnt").innerText =
      "$" + (data * discount_price) / 100;
    document.getElementById("actual").innerText =
      "$" + (data * (100 - discount_price)) / 100;
  } else {
    alert("Invalid Promo Code");
  }
};
// let apply_btn = document.getElementById("apl");

// apply_btn.onclick = () => {
//   discount();
// };
// const discount = () => {
//   let promo_code = document.getElementById("promo").value;

//   if (promo_code == "masai30") {
//     document.getElementById("dscnt").innerText = `$${Math.round(
//       (data * 30) / 100
//     )}`;

//     document.getElementById("actual").innerText = `$${Math.round(
//       (data * 70) / 100
//     )}`;
//   } else if (promo_code == "") {
//     alert("Please enter Promo code");
//   } else if (promo_code == "masai20") {
//     document.getElementById("dscnt").innerText =
//       "$" + Math.round((data * 20) / 100);
//     document.getElementById("actual").innerText =
//       "$" + Math.round((data * 80) / 100);
//   } else {
//     alert("Code is not eligible");
//   }
// };

document.getElementById("actual").innerText = "$" + data;
