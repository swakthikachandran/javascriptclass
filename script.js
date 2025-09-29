async function loadProducts() {
    const productList = document.getElementById("product-list");
    const errorMessage = document.getElementById("error-message");
  
    try {
      const response = await fetch("products.json");
  
      if (!response.ok) {
        throw new Error("Failed to load product data.");
      }
  
      const products = await response.json();
  
      // Clear previous content
      productList.innerHTML = "";
  
      // Display products
      products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <h2>${product.name}</h2>
          <p><strong>Price:</strong> ₹${product.price}</p>
          <p>${product.description}</p>
        `;
        productList.appendChild(div);
      });
    } catch (error) {
      errorMessage.textContent = "Error loading products: " + error.message;
    }
  }
  
  // Load products on page load
  window.onload = loadProducts;
  