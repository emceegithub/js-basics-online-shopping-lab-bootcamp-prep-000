var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem[item] = Math.floor(Math.random()*101)
  cart.push(newItem)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var message = "In your cart, you have "
    var lastIndex = cart.length-1
    var lastObject = cart[lastIndex]
    var lastKey = Object.keys(lastObject)
    var lastKeyValue = lastObject[lastKey]
    for (var i=0;i<cart.length-1;i++) {
      for (var key in cart[i]) {
        message = message + key + " at $" + cart[i][key] + ", "
      }
    }
    message = message + "and " + lastKey + " at $" + lastKeyValue + "."
    console.log(message)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
