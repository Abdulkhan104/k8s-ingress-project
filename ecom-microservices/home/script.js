document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  const modal = document.getElementById('cart-modal');
  const btn = document.getElementById('cart-btn');
  const span = document.getElementsByClassName('close')[0];
  btn.onclick = (e) => { e.preventDefault(); displayCart(); modal.style.display = 'block'; };
  span.onclick = () => { modal.style.display = 'none'; };
  window.onclick = (event) => { if (event.target === modal) modal.style.display = 'none'; };
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let itemsDiv = document.getElementById('cart-items');
  itemsDiv.innerHTML = '';
  if (cart.length === 0) {
    itemsDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      let p = document.createElement('p');
      p.textContent = `${item.name} - $${item.price}`;
      itemsDiv.appendChild(p);
    });
  }
}