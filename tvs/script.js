let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(itemName) {
  const item = { id: Date.now(), name: itemName, quantity: 1 };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${item.name} added to cart!`);
}

function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    const cartItems = cart.map(item => `${item.name} (x${item.quantity})`).join("\n");
    alert(`Cart Items:\n${cartItems}`);
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);