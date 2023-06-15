let hardware = [
  {
    id: 1,
    img: "https://i.postimg.cc/wxC1q6tH/hardware.webp",
    name: "ESL x Razer Headset BlackShark V2",
    desc: "random description of the product",
    price: "130",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/J7PW0jKY/hardware1.webp",
    name: "ESL x Razer Keyboard Huntsman V2",
    desc: "random description of the product",
    price: "190",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/NjLNDH6M/hardware2.webp",
    name: "ESL x Razer Mouse Viper V2",
    desc: "random description of the product",
    price: "110",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/G2w894gL/g2.webp",
    name: "G2 ESPORTS 2023 Pro Jersey",
    desc: "random description of the product",
    price: "60",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/SR4mWkkp/vitality.webp",
    name: "Team Vitality 2023 Pro Jersey",
    desc: "random description of the product",
    price: "60",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/HLHGZ3FQ/heroic.webp",
    name: "Heroic 2023 Pro Jersey",
    desc: "random description of the product",
    price: "70",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/pdT6m7jX/faze.webp",
    name: "FaZe Clan 2023 Pro Jersey",
    desc: "random description of the product",
    price: "69",
  },

];

function displayProducts() {
  const ourProducts = document.getElementById("products");
  hardware.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList += 'col-12 col-sm-6 col-md-4 col-lg-3'
    productElement.innerHTML = `
      <div class="card bg-black text-white border-white border-2 p-2 text-center">
      <img src="${product.img}" style="height: 400px>
      <h4 class="fs-4">${product.name}</h4>
      <div class="card-body">
      <p class="text-white fs-6">${product.desc}</p>    
      <p class="text-white fs-4">€${product.price}</p>  
      <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 mb-2 border-3" onclick="addToCart(${product.id})">Add to Cart</button>
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
  console.log(cart);
}

function showTask() {
  const cartContainer = document.getElementById("cart-container");
  cart.forEach((item) => {
    cartContainer.innerHTML += `
        <span>${item.name}</span>
        <span>€${item.price}</span></br>
      `;
  });
}

showTask();
