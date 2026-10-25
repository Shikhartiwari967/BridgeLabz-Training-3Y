// Q 1: E-Commerce Product Manager (Classes + Objects)

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Method to apply a discount percentage
  applyDiscount(discountPercentage) {
    const discountAmount = (this.price * discountPercentage) / 100;
    this.price -= discountAmount;
    return this.price;
  }

  // Method to display product details in a formatted string
  displayDetails() {
    return `[ID: ${this.id}] ${this.name} (${this.category}) - Price: $${this.price.toFixed(2)}`;
  }
}

// Create multiple product objects and store them in an array
const inventory = [
  new Product(101, "Wireless Mouse", 25.99, "Electronics"),
  new Product(102, "Mechanical Keyboard", 120.00, "Electronics"),
  new Product(103, "Ergonomic Office Chair", 350.00, "Furniture"),
  new Product(104, "Gaming Laptop", 1450.00, "Computers"),
  new Product(105, "4K Monitor", 1100.00, "Electronics"),
  new Product(106, "USB-C Hub", 45.00, "Accessories")
];

console.log("--- Applying a 10% Discount to the Gaming Laptop ---");
// Applying a 10% discount to the Gaming Laptop (index 3)
inventory[3].applyDiscount(10);
console.log(inventory[3].displayDetails());

console.log("\n--- Products with Price > 1000 ---");
// Display products with price > 1000 using a filter
const expensiveProducts = inventory.filter(product => product.price > 1000);

expensiveProducts.forEach(product => {
  console.log(product.displayDetails());
});