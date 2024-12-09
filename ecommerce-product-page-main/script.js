// script.js

const cartDropdown = document.querySelector('.cart-dropdown');
const cartButton = document.querySelector('.cart-btn');
const quantityValue = document.querySelector('.quantity-value');
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const addToCartButton = document.querySelector('.add-to-cart');

// Toggle cart dropdown visibility
cartButton.addEventListener('click', () => {
    cartDropdown.classList.toggle('hidden');
});

// Update quantity
let quantity = 1;

incrementButton.addEventListener('click', () => {
    quantity++;
    quantityValue.textContent = quantity;
});

decrementButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});

// Add to cart (mock functionality)
addToCartButton.addEventListener('click', () => {
    alert(`Added ${quantity} items to the cart!`);
});
