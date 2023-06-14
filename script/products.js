let hardware = [{
    img: "https://i.postimg.cc/wxC1q6tH/hardware.webp",
    name: "ESL x Razer Headset BlackShark V2",
    desc: "",
    price: "130"
},
{
    img: "https://i.postimg.cc/J7PW0jKY/hardware1.webp",
    name: "ESL x Razer Keyboard Huntsman V2",
    desc: "",
    price: "190"
},
{
    img: "https://i.postimg.cc/NjLNDH6M/hardware2.webp",
    name: "ESL x Razer Mouse Viper V2",
    desc: "",
    price: "110"
},
{
    img: "https://i.postimg.cc/wxC1q6tH/hardware.webp",
    name: "ESL x Razer MousePad Gigantus V2",
    desc: "",
    price: "40"
}]


function displayProducts() {
    const ourProducts = document.getElementById("products");
    hardware.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
      <div class="card col-3 bg-black text-white border-white border-2 p-2 text-center">
      <img src="${product.img}" style="height: 400px">
      <h4 class="fs-4">${product.name}</h4>
      <div class="card-body">
      <p class="text-white fs-6">${product.desc}</p>      
      <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 mb-2 border-3" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
      </div>`;
      ourProducts.appendChild(productElement);
    });
  }

  let cart = JSON.parse(localStorage.getItem('data')) || [];
  
  function addToCart(productId) {
    const cartContainer = document.getElementById("cart-container");
    const product = products.find((product) => product.id === productId);
  
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
      
    }
    setItems();
  }
  
  function updateCart() {
      const cartContainer = document.getElementById("cart-container");
      cartContainer.innerHTML = "";
  
      cart.forEach(product => {
          const cartItem = document.createElement("div")
          cartItem.innerHTML = `<span>${product.name}</span>
          <span>R${product.price}</span>
          `
          cartContainer.appendChild(cartItem)
      }) 
  }
  
  displayProducts();
  

function setItems() {
    const cartContainer = document.getElementById("cart-container");
    localStorage.setItem("data", JSON.stringify(cart))
    console.log(cart)
}

function showTask() {
    const cartContainer = document.getElementById("cart-container");
    cart.forEach(item => {
      cartContainer.innerHTML += `
        <span>${item.name}</span><br>
        <span>R
        ${item.price}</span><br>
      `
    })
}
  
  
showTask();

