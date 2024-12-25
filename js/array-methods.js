// // Amazon - Adding items to a cart
// // let shoppingCart = ["Laptop", "Mouse"];
// // shoppingCart.push("Keyboard", "Monitor");
// // console.log(shoppingCart); // Output: ["Laptop", "Mouse", "Keyboard", "Monitor"]



// let laptopProtectionProducts = ["bag", "cleaningKit", "insurance"];

// let shoppingCart = ["mouse", "laptop", "keyboard"];
// console.log(shoppingCart)
// console.log("You are buying a total of", shoppingCart.length, "items");

// // ask user to buy few more items from the add-ons

// let addOnsQuestion = String(prompt("Would you like to shop for addiontal items to protect laptop? yes/no"));
// if (addOnsQuestion === "") {
//     console.log("Please type your input either yes or no")
// }
// if (addOnsQuestion === "no") {
//     console.log("Got it, here is your shopping list", shoppingCart);
// }

// if (addOnsQuestion === "yes") {
//     console.log("Great, we have the following laptop protection items. What would you like to choose?", laptopProtectionProducts);
//     let addOnsSelected = String(prompt("What would you like to add? enter exit if you are done"));
//     shoppingCart.push(addOnsSelected);
//     laptopProtectionProducts = laptopProtectionProducts.length - 1;
//     console.log("You selected the addiotional products as:", addOnsSelected);
//     console.log("Items left", laptopProtectionProducts);
//     if (laptopProtectionProducts.length > 1) {
//         let addOnsQuestionTwo = String(prompt("Would you like to add anything else? or exit?"));
//         if (addOnsQuestionTwo === "")
//             console.log("please type something..");
//     }

//     if (addOnsQuestionTwo === "no") {
//         console.log("Great, you are done shopping");
//     }
//     if (addOnsQuestionTwo === "yes") {
//         let addOnsSelectedTwice = String(prompt("Enter the product name or type exit"));
//         shoppingCart.push(addOnsSelectedTwice);
//         console.log("Your updated cart is:", shoppingCart);
//     }
// }

// console.log("Final shopping list:", shoppingCart);



/*
Store the available products in an array
First show the available products in an array
Then ask the user if he would like to shop or not
if the user wants to shop.. load the products from the array and add to the cart

Then display the billing amount..

Then ask the user if they would like to buy an addon
While it is true? keep showing all the available products from addon array
if any of the addon product is available from the addonlists, then add that to the shopping cart

*/


let availableProducts = ["Laptop", "Phone", "ball"];
let addiotionalProducts = ["bag", "keyboard", "Mouse"];
let shoppingCart = [];


// add products

function addProducts() {
    let add = String(prompt("Would you like to add products?"))
    if (add === "yes") {
        availableProducts.push("pencil", "pen");
        console.log("new products added. All products:", availableProducts);
    }
}

addProducts();

let readyToshop = false;
let userShoppingIntent = String(prompt("Would you like to shop?"));
if (!userShoppingIntent) {
    console.log("Please say something yes or no...");
} else if (userShoppingIntent.toLocaleLowerCase() === "no") {
    console.log("Got it, you can shop anytime...");
} else if (userShoppingIntent.toLocaleLowerCase() === "yes") {
    readyToshop = true;
    console.log("great, here are the products available to shop:", availableProducts);
}

function addToCart() {
    for (i = 0; i < availableProducts.length; i++) {
        let res = String(prompt(`Would you like to buy ${availableProducts[i]}`));
        if (res === "yes") {
            shoppingCart.push(availableProducts[i]);
            console.log(shoppingCart[i], "product is added");
        } else if (res === "no") {
            console.log("No problem")
        }
    }
}


addToCart();
console.log("here is your cart", shoppingCart);
