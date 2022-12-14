const logo_image = document.getElementById("logo_image");
logo_image.style.cursor = "pointer";
logo_image.onclick = () => {
  location.href = "./index.html";
};

const basket_icon = document.getElementById("basket_icon");
basket_icon.onclick = () => {
  location.href = "./cart.html";
};

const basket_count = document.getElementById("basket_count");
let count = JSON.parse(localStorage.getItem("addToBasket")) || [];
basket_count.innerText = count.length;

// fetching and appending for brush category
let fetchDataBrush = async () => {
  let res = await fetch("https://sephora-server.onrender.com/brush");
  let data = await res.json();
  appendDataNew(data);
  appendDataTools(data);
};
fetchDataBrush();

let appendDataNew = (data) => {
  const new_megamenu_items = document.getElementById("new_megamenu_items");
  const image1 = document.createElement("img");
  image1.src =
    "https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590";
  const image2 = document.createElement("img");
  image2.src =
    "https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294";

  for (let i = 0; i < 2; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataNew(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image1, image2);
  }
};
let getDataNew = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataTools = (data) => {
  const new_megamenu_items = document.getElementById("tools_megamenu_items");
  const image = document.createElement("img");
  image.src =
    "https://www.sephora.com/contentimages/meganav/large/2022-04-29-sc-site-desktop-global-navigation-button-tools-brushes.jpg?imwidth=294";
  for (let i = 0; i < 3; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataTools(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image);
  }
};
let getDataTools = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
// fetching and appending for skincare category

let fetchDataSkincare = async () => {
  let res = await fetch("https://sephora-server.onrender.com/skincare");
  let data = await res.json();
  appendDataSkincare(data);
  appendDataBath(data);
  appendDataSale(data);
};

fetchDataSkincare();

let appendDataSkincare = (data) => {
  const new_megamenu_items = document.getElementById("skincare_megamenu_items");

  for (let i = 0; i < 4; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataSkincare(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items);
  }
};
let getDataSkincare = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataBath = (data) => {
  const new_megamenu_items = document.getElementById("bath_megamenu_items");
  const image = document.createElement("img");
  image.src =
    "https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294";
  for (let i = 0; i < 3; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataBath(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image);
  }
};
let getDataBath = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataSale = (data) => {
  const new_megamenu_items = document.getElementById("sale_megamenu_items");
  const image1 = document.createElement("img");
  image1.src =
    "https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294";
  const image2 = document.createElement("img");
  image2.src =
    "https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294";
  for (let i = 0; i < 2; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataSale(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image1, image2);
  }
};
let getDataSale = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
// fetching and appending for fragrance category

let fetchDatafragrance = async () => {
  let res = await fetch("https://sephora-server.onrender.com/fragrance");
  let data = await res.json();
  appendDatafragrance(data);
  appendDataGifts(data);
};

fetchDatafragrance();

let appendDatafragrance = (data) => {
  const new_megamenu_items = document.getElementById(
    "fragrance_megamenu_items"
  );

  for (let i = 0; i < 4; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 24);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataFragrance(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items);
  }
};
let getDataFragrance = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataGifts = (data) => {
  const new_megamenu_items = document.getElementById("gifts_megamenu_items");
  const image = document.createElement("img");
  image.src =
    "https://www.sephora.com/contentimages/2022-holiday-launch-gift-finder-site-desktop-global-navigation-button-us-can-release.jpg?imwidth=590";
  for (let i = 0; i < 3; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 24);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataGifts(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image);
  }
};
let getDataGifts = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
// fetching and appending for lipstick category

let fetchDatalipstick = async () => {
  let res = await fetch("https://sephora-server.onrender.com/lipstick");
  let data = await res.json();
  appendDataMakeup(data);
  appendDataBrand(data);
  appendDataBeauty(data);
};

fetchDatalipstick();

let appendDataMakeup = (data) => {
  const new_megamenu_items = document.getElementById("makeup_megamenu_items");

  for (let i = 0; i < 4; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataMakeup(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items);
  }
};
let getDataMakeup = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataBrand = (data) => {
  const new_megamenu_items = document.getElementById("brands_megamenu_items");

  for (let i = 0; i < 4; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataBrand(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items);
  }
};
let getDataBrand = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataBeauty = (data) => {
  const new_megamenu_items = document.getElementById("beauty_megamenu_items");
  const image = document.createElement("img");
  image.src =
    "https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-beauty-under-20-us-can-release.jpg?imwidth=590";
  for (let i = 0; i < 2; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataBeauty(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image);
  }
};
let getDataBeauty = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
// fetching and appending for hair category

let fetchDatahair = async () => {
  let res = await fetch("https://sephora-server.onrender.com/hair");
  let data = await res.json();
  appendDatahair(data);
  appendDataMini(data);
};

fetchDatahair();

let appendDatahair = (data) => {
  const new_megamenu_items = document.getElementById("hair_megamenu_items");

  for (let i = 0; i < 4; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataHair(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items);
  }
};
let getDataHair = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
let appendDataMini = (data) => {
  const new_megamenu_items = document.getElementById("mini_megamenu_items");
  const image1 = document.createElement("img");
  image1.src =
    "https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-minis-us-can-release.jpg?imwidth=590";
  const image2 = document.createElement("img");
  image2.src =
    "https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294";
  for (let i = 0; i < 2; i++) {
    const items = document.createElement("div");
    items.setAttribute("class", "items");
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 49);
      const brandName = document.createElement("p");
      brandName.innerText = data[random].productName;
      brandName.onclick = () => {
        getDataMini(data[random]);
      };
      items.append(brandName);
    }
    new_megamenu_items.append(items, image1, image2);
  }
};
let getDataMini = (el) => {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
};
//signin handle
let signin_div = document.querySelector(".signin_div");
signin_div.onclick = () => {
  let admin_login = document.getElementById("admin_login");
  if (admin_login.style.display == "none") {
    admin_login.style.display = "block";
  } else {
    admin_login.style.display = "none";
  }
};
let login_data = document.getElementById("login_data");
let stored_data = JSON.parse(sessionStorage.getItem("user_login")) || null;
if (stored_data != null) {
  signin_div.innerHTML = `<div id="login_icon_data"><img id="log_icon" src="https://img.icons8.com/material/96/null/user-male-circle--v1.png"/><div id="logout_section"><p></p><p></p></div></div>`;
}
let showInfo = document.querySelector("#logout_section>p:nth-child(1)");
showInfo.innerText = stored_data.email;
let logout_data = document.querySelector("#logout_section>p:nth-child(2)");
logout_data.innerText = "Logout";
logout_data.onclick = () => {
  sessionStorage.removeItem("user_login");
  location.href = "./index.html";
};

let logoutIcon = document.getElementById("log_icon");
logoutIcon.onclick = () => {
  let logout_sec = document.getElementById("logout_section");
  if (logout_sec.style.display == "none") {
    logout_sec.style.display = "block";
  } else {
    logout_sec.style.display = "none";
  }
};
