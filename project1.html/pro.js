let products = [
  { name: "iPhone 14", price: 69999, image: "i15.jpg" },
  { name: "Samsung Galaxy S23", price: 74999, image: "my phone.jpg" },
  { name: "Redmi Note 12", price: 17999, image: "samsung img.jpg" },
  { name: "OnePlus Nord", price: 29999, image: "one plus.jpg" }
];

let cart = [];
let total = 0;

function loadProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(phone => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-name", phone.name.toLowerCase());

    card.innerHTML = `
      <img src="${phone.image}">
      <h3>${phone.name}</h3>
      <p>₹${phone.price}</p>
      <button onclick="addToCart('${phone.name}', ${phone.price})">
        Add to Cart
      </button>
    `;

    productList.appendChild(card);
  });
}

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((c, index) => {
    cartItems.innerHTML += `
      <li>
        ${c.item} - ₹${c.price}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = `Total: ₹${total}`;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    alert("Order placed successfully 📦");
    cart = [];
    total = 0;
    updateCart();
  }
}

function searchProduct() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

window.onload = loadProducts;
