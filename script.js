// script.js

document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("addToCartBtn");
    const errorDiv = document.getElementById("error");
    const cartItems = document.getElementById("cartItems");

    addToCartBtn.addEventListener("click", () => {
        const selectedSize = document.querySelector('input[name="size"]:checked');

        if (!selectedSize) {
            errorDiv.textContent = "Please select a size.";
            return;
        }

        const product = {
            name: "Classic Tee",
            size: selectedSize.value,
        };

        addToCart(product);
    });

    function addToCart(product) {
        errorDiv.textContent = "";

        // Check if the product size is already in the cart
        const existingCartItem = Array.from(cartItems.children).find(item => item.dataset.size === product.size);

        if (existingCartItem) {
            // Increment the quantity if the product size is already in the cart
            existingCartItem.dataset.quantity = parseInt(existingCartItem.dataset.quantity) + 1;
            existingCartItem.textContent = `${product.name} (${product.size}) x ${existingCartItem.dataset.quantity}`;
        } else {
            // Create a new cart item if the product size is not in the cart
            const cartItem = document.createElement("li");
            cartItem.textContent = `${product.name} (${product.size}) x 1`;
            cartItem.dataset.size = product.size;
            cartItem.dataset.quantity = 1;
            cartItems.appendChild(cartItem);
        }
    }
});
