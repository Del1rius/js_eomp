let hardware = JSON.parse(localStorage.getItem("products")) || [];

function displayProducts() {
  const ourProducts = document.getElementById("products");
  ourProducts.innerHTML = ""; // Clear previous content

  const products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach((product) => {
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

displayProducts();

function addToCart(productId) {
  const product = hardware.find((product) => product.id === productId);

  if (product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }
}

function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
                    <button onclick="removeFromCart(${product.id})" class="close-btn">X</button>
                    <span>${product.name}</span>
                    <span>€${product.price}</span>
                `;
    cartContainer.appendChild(cartItem);
  });
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex((product) => product.id === productId);
  if (index > -1) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }
}

function addProduct() {
  const form = document.getElementById("product-form");
  const productId = parseInt(form.elements["id"].value);
  const productName = form.elements["name"].value;
  const productDesc = form.elements["desc"].value;
  const productPrice = parseFloat(form.elements["price"].value);
  const productImg = form.elements["img"].value;

  const newProduct = {
    id: productId,
    name: productName,
    desc: productDesc,
    price: productPrice,
    img: productImg,
  };

  hardware.push(newProduct);
  localStorage.setItem("products", JSON.stringify(hardware));

  displayProducts();
  form.reset();
}

function editProduct(productId) {
  const product = hardware.find((product) => product.id === productId);

  if (product) {
    const form = document.getElementById("product-form");
    form.elements["id"].value = product.id;
    form.elements["name"].value = product.name;
    form.elements["desc"].value = product.desc;
    form.elements["price"].value = product.price;
    form.elements["img"].value = product.img;
  }
}

function updateProduct() {
  const form = document.getElementById("product-form");
  const productId = parseInt(form.elements["id"].value);
  const productName = form.elements["name"].value;
  const productDesc = form.elements["desc"].value;
  const productPrice = parseFloat(form.elements["price"].value);
  const productImg = form.elements["img"].value;

  const productIndex = hardware.findIndex(
    (product) => product.id === productId
  );

  if (productIndex > -1) {
    hardware[productIndex] = {
      id: productId,
      name: productName,
      desc: productDesc,
      price: productPrice,
      img: productImg,
    };

    localStorage.setItem("products", JSON.stringify(hardware));

    displayProducts();
    form.reset();
  }
}

function deleteProduct(productId) {
  const productIndex = hardware.findIndex(
    (product) => product.id === productId
  );

  if (productIndex > -1) {
    hardware.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(hardware));
    displayProducts();
  }
}

displayProducts();

function sort() {
    hardware.sort()
}