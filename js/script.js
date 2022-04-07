'use strict';

const cartQuantity = document.querySelector('.quantity-cart');
const addQuantity = document.querySelector('.plus-btn');
const subtractQuantity = document.querySelector('.minus-btn');

let quantity = +cartQuantity.textContent;

// eventlisteners to add & subtract amount
addQuantity.addEventListener('click', function () {
  quantity++;
  cartQuantity.textContent = quantity;
});

subtractQuantity.addEventListener('click', function () {
  if (quantity === 0) return;
  quantity--;
  cartQuantity.textContent = quantity;
});
