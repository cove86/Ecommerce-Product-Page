'use strict';

const cartQuantity = document.querySelector('.quantity-cart');
const addQuantity = document.querySelector('.plus-btn');
const subtractQuantity = document.querySelector('.minus-btn');

addQuantity.addEventListener('click', function () {
  let quantity = +cartQuantity.textContent;
  quantity++;
  cartQuantity.textContent = quantity;
});

subtractQuantity.addEventListener('click', function () {
  let quantity = +cartQuantity.textContent;
  if (quantity === 0) return;
  quantity--;
  cartQuantity.textContent = quantity;
});
