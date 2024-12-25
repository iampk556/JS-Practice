// create a e-commerce program with arrays
// allow the shopper to add some products to the cart, remove, update and delete
// when the crud operations are performed, upadte the array list of products.



let shoppingList = [];
let suspendedUsers = ["pk1", "pk2", "pk3"];
let userOne = "pk";
let userOnePass = "pk123";
//let BeforeLoginUserInput = String(prompt("Hey, welcome to Amazon. What would you like to do shop?"));

let hasUserLoggedIn = false;
function userLogin() {
    while (!hasUserLoggedIn) {
        let userName = String(prompt("Enter the login user name"));
        let userPassword = String(prompt("Enter the user password"));
        if (suspendedUsers.includes(userName)) {
            console.log("Sorry, your account has been suspended. You can not login..");
            break;
        }
        if (userName == userOne && userPassword == userOnePass) {
            console.log("Welcome to Amazon", userOne);
            hasUserLoggedIn = true;
            return true;
        } else {
            console.log("Invalid login credentials...")
            break;
        }
    }
}


// create a shopping list

function shopping() {
    if (!userLogin()) {
        console.log("Please login to continue");
        return
    }

    let shoppingBtnClick = String(prompt("Would you like to shop? yes"));
    if (shoppingBtnClick == "") {
        console.log("Please enter a valid input");
    }
    if (shoppingBtnClick === "no") {
        console.log("Okay, do visit our website when you want to shop");
        return;
    }

    if (shoppingBtnClick === "yes") {
        for (i = 0; i <= 4; i++) {
            addItem = String(prompt("Please add your item"));
            shoppingList.push(addItem);
            console.log("Item added to the shopping list", shoppingList)
            //console.log("total items added are", shoppingList.length());
            if (addItem === "done") {
                console.log("Thansk for shopping, here is your shopping list", shoppingList);
                break;
            }
        }
    }


}



// Shopping function
function shopping() {
    if (!userLogin()) {
        console.log("You need to log in before shopping.");
        return;
    }

    let shoppingBtnClick = String(prompt("Would you like to shop? yes/no")).toLowerCase().trim();
    if (shoppingBtnClick === "no") {
        console.log("Okay, do visit our website when you want to shop.");
        return; // it won't execute the below code
    }

    if (shoppingBtnClick === "yes") {
        console.log("Start adding items to your shopping list. Type 'done' when finished.");
        while (true) {
            let addItem = String(prompt("Please add your item:")).toLowerCase().trim();
            if (addItem === "done") {
                console.log("Thanks for shopping! Here is your shopping list:", shoppingList);
                break;
            }
            if (addItem === "") {
                console.log("Item name cannot be empty. Try again.");
                continue;
            }
            shoppingList.push(addItem);
            console.log("Item added:", addItem);
        }
    }
}



function customerShopping() {
    if (!userLogin()) {
        console.log("You need to login before shopping!");
        return;
    }

    // assume the user has logged in 

    let btnClick = String(prompt("Would you like to shop now? yes/no").toLocaleLowerCase.trim());
    if (btnClick === "no") {
        // display a message and exit the loop
        console.log("Okay, do check the products when you want to shop");
        return;
    }

    // handle the yes case
    if (btnClick === "yes") {
        console.log("Please add the items and type Done when finished");
        while (true) {
            let addedItem = String(prompt("Add the item here"));
            if (addedItem === "") {
                console.log("item name can not be empty");
                continue;
            }

            if (addedItem === "done") {
                console.log("Thansk for shopping, all items are added");
                break;
            }
        }
        // add the items to the array
        shoppingList.push(addedItem);
        console.log("item added:", addedItem);
    }

}


