// let cartCount = 0;

// function addToCart(size) {
//   if (size) {
//     cartCount++;
//     updateCartCount();
//   }

  
//   const selectedSizeButton = document.getElementById(`size${size}`);
//   selectedSizeButton.classList.toggle('selected');

//   // Reset other size buttons to their original style
//   const sizeButtons = document.querySelectorAll('.button li');
//   sizeButtons.forEach(button => {
//     if (button !== selectedSizeButton) {
//       button.classList.remove('selected');
//     }
//   });
// }

// function updateCartCount() {
//   const cartCountElement = document.getElementById('cartCount');
//   cartCountElement.textContent = `(${ cartCount })`;
// }



// cart
let cartCount = 0;
let cartItems = [];

function addToCart(size) {
  if (size) {
    cartCount++;
    updateCartCount();
    cartItems.push({ size, quantity: 1 }); // Store size and quantity in an object
  }

  const selectedSizeButton = document.getElementById(`size${size}`);
  selectedSizeButton.classList.toggle('selected');

  const sizeButtons = document.querySelectorAll('.button li');
  sizeButtons.forEach(button => {
    if (button !== selectedSizeButton) {
      button.classList.remove('selected');
    }
  });
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  cartCountElement.textContent = `(${cartCount})`;
}



const myCartElement = document.getElementById('cart');

function showCartItems() {
  // Check if the cart is empty, and if so, return without doing anything
  if (cartItems.length === 0) {
    return;
  }

  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.classList.toggle('hidden');

  const cartListElement = document.getElementById('cartList');

  // Show the cart items
  if (!cartItemsElement.classList.contains('hidden')) {
    cartListElement.innerHTML = '';
    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        const li = document.createElement('li');
  
          // Create a div to hold the item details
          const itemDetails = document.createElement('div');
          itemDetails.className = 'item-details';
  
          // Create an image element for the Classic Tee photo
          const image = document.createElement('img');
          image.src = './assets/images/classic-tee.jpg';
          image.alt = 'Classic Tee';
          itemDetails.appendChild(image);
  
          // Create a div for the product details (quantity, price, and size)
          const productDetails = document.createElement('div');
          productDetails.className = 'product-details';
  
          // Create a span for the product name (Classic Tee)
          const productName = document.createElement('span');
          productName.textContent = 'Classic Tee';
          productDetails.appendChild(productName);
  
          // Create a span for the quantity and price
          const quantityPrice = document.createElement('span');
          quantityPrice.textContent = ` ${item.quantity} * $75.00`;
          productDetails.appendChild(quantityPrice);
  
          // If there are multiple sizes, display each size on a separate line
          if (item.sizes && item.sizes.length > 0) {
            item.sizes.forEach(size => {
              const sizeSpan = document.createElement('span');
              sizeSpan.textContent = `Size: ${size}`;
              productDetails.appendChild(sizeSpan);
            });
          } else {
            // If there's only one size, display it on the same line as "Size:"
            const sizeSpan = document.createElement('span');
            sizeSpan.textContent = `Size: ${item.size}`;
            productDetails.appendChild(sizeSpan);
          }
  
          // Append the product details to the item details div
          itemDetails.appendChild(productDetails);
  
          // Append the item details div to the list item
          li.appendChild(itemDetails);
  
          cartListElement.appendChild(li);
        });
      }
    }
      

  // Toggle the "clicked" class to add/remove the border
  myCartElement.classList.toggle('clicked');
}

// Rest of the JavaScript code for addToCart and other functionalities (not shown here)


  
  



