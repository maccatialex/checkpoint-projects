document.addEventListener('DOMContentLoaded', () => {
    // Creating a ShoppingCart instance
    const cart = new ShoppingCart();
  
    // Sample products for demonstration (ensure these match your HTML)
    const products = [
      new Product(1, "Baskets", 100),
      new Product(2, "Socks", 20),
      new Product(3, "Bag", 50),
    ];
  
    // Event listeners for DOM interactions
    document.querySelectorAll(".fa-plus-circle").forEach(plus => {
      plus.addEventListener("click", () => {
        const card = plus.closest(".card");
        const productId = parseInt(card.dataset.productId);
        const product = products.find(p => p.id === productId);
        cart.addItem(product);
      });
    });
  
    document.querySelectorAll(".fa-minus-circle").forEach(minus => {
      minus.addEventListener("click", () => {
        const card = minus.closest(".card");
        const productId = parseInt(card.dataset.productId);
        const item = cart.items.find(i => i.product.id === productId);
        if (item) {
          item.decreaseQuantity();
          if (item.quantity === 0) {
            cart.removeItem(productId);
          } else {
            cart.updateDOM();
          }
        }
      });
    });
  
    document.querySelectorAll(".fa-heart").forEach(love => {
      love.addEventListener('click', () => {
        love.classList.toggle('loved');
      });
    });
  
    document.querySelectorAll(".fa-trash-alt").forEach(del => {
      del.addEventListener('click', () => {
        const card = del.closest('.card');
        const productId = parseInt(card.dataset.productId);
        cart.removeItem(productId);
      });
    });
  });
  
  class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity = 1) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  
    increaseQuantity() {
      this.quantity++;
    }
  
    decreaseQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.increaseQuantity();
      } else {
        this.items.push(new ShoppingCartItem(product));
      }
      this.updateDOM();
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
      this.updateDOM();
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    updateDOM() {
      document.querySelectorAll(".card").forEach(card => {
        const productId = parseInt(card.dataset.productId);
        const item = this.items.find(item => item.product.id === productId);
  
        if (item) {
          card.querySelector(".quantity").innerText = item.quantity;
        } else {
          card.querySelector(".quantity").innerText = "0";
        }
      });
  
      const totalElement = document.querySelector(".total");
      totalElement.innerText = `${this.getTotalPrice().toFixed(2)} $`;
    }
  }