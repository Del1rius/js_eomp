let hardware = [
  {
    id: 1,
    img: "https://i.postimg.cc/c4j7Rq5L/kits.webp",
    name: "Cloud9 ESPORTS 2023 Pro Jersey",
    desc: "random description of the product",
    price: "70",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/SR4mWkkp/vitality.webp",
    name: "Team Vitality 2023 Pro Jersey",
    desc: "random description of the product",
    price: "60",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/HLHGZ3FQ/heroic.webp",
    name: "Heroic 2023 Pro Jersey",
    desc: "random description of the product",
    price: "70",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/8kF8tgWL/navi.png",
    name: "Natus Vincere 2023 Pro Jersey",
    desc: "random description of the product",
    price: "69",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/wxC1q6tH/hardware.webp",
    name: "ESL x Razer Headset BlackShark V2",
    desc: "random description of the product",
    price: "130",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/J7PW0jKY/hardware1.webp",
    name: "ESL x Razer Keyboard Huntsman V2",
    desc: "random description of the product",
    price: "190",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/NjLNDH6M/hardware2.webp",
    name: "ESL x Razer Mouse Viper V2",
    desc: "random description of the product",
    price: "110",
  },
  {
    id: 8,
    img: "https://i.postimg.cc/kg8TLdH3/hardware3.webp",
    name: "ESL x Razer MousePad",
    desc: "random description of the product",
    price: "40",
  },
];

function displayProducts() {
  const ourProducts = document.getElementById("products");
  hardware.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList += 'col-12 col-sm-6 col-md-4 col-lg-3'
    productElement.innerHTML = `
      <div class="card bg-black text-white border-white border-2 p-2 text-center mt-3 mb-3">
      <img src="${product.img}" style="height: 400px>
      <h4 class="fs-4">${product.name}</h4>
      <div class="card-body">
      <p class="text-white fs-6">${product.desc}</p>    
      <p class="text-white fs-4">€${product.price}</p>  
      <button type="button" class="productBtn text-white text-center border-white p-2 mt-2 mb-2 border-3" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
      </div>`;
    ourProducts.appendChild(productElement);
  });
}

let cart = JSON.parse(localStorage.getItem("data")) || [];

function addToCart(productId) {
  const cartContainer = document.getElementById("cart-container");
  const product = hardware.find((product) => product.id === productId);

  if (product) {
    cart.push(product);
    updateCart();
  }
  setItems();
}

function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <button onclick="delItem(${product.id})" class="close-btn">X</button>
      <span>${product.name}</span>
      <span>€${product.price}</span>
    `;
    cartContainer.appendChild(cartItem);
  });
}

displayProducts();

function setItems() {
  const cartContainer = document.getElementById("cart-container");
  localStorage.setItem("data", JSON.stringify(cart));
}

function showTask() {
  const cartContainer = document.getElementById("cart-container");
  cart.forEach((item) => {
    cartContainer.innerHTML += `
        <button onclick="delItem(${item.id})" class="close-btn">X</button> 
        <span>${item.name}</span>
        <span>€${item.price}</span></br>
        
      `;
  });
}

showTask();

function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += parseFloat(item.price);
  });
  totalElement.textContent = `€${total}`;
}

calculateTotal();

function delItem(productId) {
  const index = cart.findIndex((product) => product.id === productId);
  if (index > -1) {
    cart.splice(index, 1);
    updateCart();
    setItems();
  }
}

function displayAdmin() {
  const ourProducts = document.getElementById("admin");
  ourProducts.innerHTML = "";

  const hardware = JSON.parse(localStorage.getItem("data")) || [];

  hardware.forEach((product) => {
    const productElement = document.createElement("tr");
    productElement.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.desc}</td>
        <td>€${product.price}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="editProduct(${product.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
        </td>
      `;
    ourProducts.appendChild(productElement);
  });
}

displayAdmin();