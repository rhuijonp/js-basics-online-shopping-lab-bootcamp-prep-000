var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 //var item = Object.assign({}, {[itemName]: itemPrice});
 cart.push( Object.assign({[itemName]: itemPrice}));
 console.log(itemName + " has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length > 1) {
		var cartStatus = "In your cart, you have ";
		var and = "and";
		var at = "at";
		var totalItems = cart.length;
		
		for (var i = 0; i < cart.length; i++) { 
		var obj = cart[i];
		var objName = Object.keys(obj); 
		var objValue = cart[i][objName]; 
		
			if (totalItems === 1) {
				cartStatus += `${objName} ${at} $${objValue}.`; 
			} else {
				if (i < (cart.length - 1)) {
					cartStatus += `${objName} ${at} $${objValue}, `;
				} else {
					cartStatus +=`and ${objName} ${at} $${objValue}.`;
				}
			}
		} 
	} else {
		cartStatus = "Your shopping cart is empty.";
	}
	return cartStatus;
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
