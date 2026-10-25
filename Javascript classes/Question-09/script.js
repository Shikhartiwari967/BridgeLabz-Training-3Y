// Q 9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
  }

  // Add items with name, price, and quantity
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
    console.log(`Added ${quantity}x ${name} to cart.`);
  }

  // Calculate total amount
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  // Apply coupon validation using RegExp and show final total
  applyCoupon(couponCode) {
    const total = this.getTotal();
    console.log(`\n--- Checkout ---`);
    console.log(`Original Total: $${total.toFixed(2)}`);

   
    const couponRegex = /^[A-Z]+(\d{1,2})$/;
    const match = couponCode.match(couponRegex);

    if (match) {
      // Extract the discount percentage from the capture group (the digits)
      const discountPercent = parseInt(match[1], 10);
      const discountAmount = (total * discountPercent) / 100;
      const finalTotal = total - discountAmount;
      
      console.log(`Coupon '${couponCode}' applied successfully! (${discountPercent}% off)`);
      console.log(`Discount Amount: -$${discountAmount.toFixed(2)}`);
      console.log(`Final Total: $${finalTotal.toFixed(2)}`);
    } else {
      console.log(`Error: Coupon '${couponCode}' is INVALID.`);
      console.log(`Final Total remains: $${total.toFixed(2)}`);
    }
  }
}



const myCart = new Cart();

myCart.addItem("Wireless Headphones", 150.00, 1);
myCart.addItem("Ergonomic Mouse", 40.00, 2);
myCart.addItem("Mousepad", 20.00, 1);

// Test 1: Valid Coupon (20% off)
myCart.applyCoupon("SAVE20");

// Test 2: Valid Coupon (10% off)
myCart.applyCoupon("DISC10");

// Test 3: Invalid Coupon (Lowercase, fails regex)
myCart.applyCoupon("save20");

// Test 4: Invalid Coupon (No discount percentage digits)
myCart.applyCoupon("FREESHIP");