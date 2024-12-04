const cartCount = document.getElementById('cart-count');
let cartItems = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');

    cartItems++;
    cartCount.textContent = cartItems;

    alert(`${productName} added to cart! Price: $${productPrice}`);
  });
});
