'use strict';

const cartQuantity = document.querySelector('.quantity-cart');
const addQuantity = document.querySelector('.plus-btn');
const subtractQuantity = document.querySelector('.minus-btn');

const mainImage = document.querySelector('.product-image-main');
const imageThumbs = document.querySelectorAll('.image-thumb');

console.log(mainImage.src);

// Function to update images when thumbnail clicked
imageThumbs.forEach(img => {
  img.addEventListener('click', e => {
    const imgStart = img.src.lastIndexOf('/') + 1;
    const imgEnd = img.src.lastIndexOf('-');

    mainImage.src = 'images/' + img.src.slice(imgStart, imgEnd) + '.jpg';
    console.log(img.src.slice(imgStart, imgEnd));
  });
});
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
