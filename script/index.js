featuredProducts = [{
    img: "https://i.postimg.cc/c4j7Rq5L/kits.webp",
    id: "Kits",
    name: "2023 Kits",
    desc: "The Best Kits on the block.",
},
{   
    img: "https://i.postimg.cc/zfXpXwys/accessories1.webp",
    id: "Accessories ",
    name: "Accessories",
    desc: "The most unique accessories on the block.",
},
{
    img: "https://i.postimg.cc/wxC1q6tH/hardware.webp",
    id: "Hardware",
    name: "Hardware",
    desc: "All the Hardware you need to elevate your gameplay.",
}
];

let dispProducts = document.getElementById("products");
featuredProducts.forEach((item) => {
  dispProducts.innerHTML += `

        <div class="card col-3 bg-black text-white border-white border-2 p-2 text-center">
        <img src="${item.img}" style="height: 500px">
        <h4 class="fs-4">${item.name}</h4>
        <div class="card-body">
        <p class="text-white fs-6">${item.desc}</p>      
        <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 mb-2 border-3">Shop ${item.id}</button>
        </div>
        </div>`;
});

    