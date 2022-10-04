// const myObject = {
//   name: "Eivind",
//   myMethod: function () {
//     console.log(this.name);
//   },
// };

// const editTo = {
//   name: "Doesnt work",
//   something: "Else",
//   myMethod: () => {
//     console.log("Second object");
//   },
// };

// myObject.myMethod();

// console.log(myObject);

// Object.entries(editTo).forEach(([key, value]) => {
//   myObject[key] = value;
// });

// myObject.myMethod();

// console.log(myObject);

// ------ Shopping cart -------

// const shoppingCart = {
//   // Name of store
//   _name: "Pwer",
//   // Stores the cart items
//   _cart: [],
//   // Adds a single item to the 'cart' array
//   // set cart(item) {
//   //   this._cart.push(item);
//   // },
//   // Denne metoden kunne stått som den er:
//   addToCart: function (item) {
//     this._cart.push(item);
//   },
//   removeLastItem: function () {
//     console.log(this._cart.pop());
//   },
//   removeItem: function (item) {
//     this._cart.forEach((ele, i) => {
//       if (ele.name === item) {
//         console.log(this._cart.splice(i, 1));
//       }
//     });
//   },
//   // Displays the contents of the cart
//   // getCartItems: function () {
//   //   console.log("Cart:", this.cart);
//   // },
//   get cart() {
//     return [...this._cart];
//   },
//   set name(name) {
//     this._name = name;
//   },
//   get name() {
//     return this._name;
//   },
// };

// // // Add an item to the cart
// shoppingCart.addToCart({ name: "Milk", price: 9.99 });
// shoppingCart.addToCart({ name: "Juice", price: 19.99 });
// shoppingCart.addToCart({ name: "Bread", price: 3.99 });
// shoppingCart.addToCart({ name: "Humus", price: 3.99 });
// shoppingCart.addToCart({ name: "Rice", price: 3.99 });
// shoppingCart.addToCart({ name: "Spagetti", price: 3.99 });
// // // Display the cart contents
// // shoppingCart.getCartItems();

// shoppingCart.removeLastItem("hei");

// shoppingCart.removeItem("Juice");

// // shoppingCart.cart = { name: "Milk", price: 9.99 };
// // shoppingCart.cart = { name: "Juice", price: 19.99 };
// console.log(shoppingCart.cart);

// // Dette blir feil. Ikke akseser properties som er "private", _cart
// shoppingCart._cart = [1, 2, 3, 4, 5];

// console.log(shoppingCart._cart);

// // Should not change the object property
// // Using the getter
// let myString = shoppingCart.name;

// console.log(myString);

// myString = "hei";

// // Using the getter
// console.log(shoppingCart.name);
