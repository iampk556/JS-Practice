const websiteName = "Amazon";
let userName;
const minCartAmountforFlashsale = 100;
let registeredMember = false;
const maxShoppers = 3;
let shoppersCount = 0;
let totalCartVal;

for (shoppersCount = 0; shoppersCount < maxShoppers; shoppersCount++) {
    userName = String(prompt("Whats your name"));
    totalCartVal = Number(prompt("What is your billing amount in total"));
    memberStatus = String(prompt("Are you a registerd member with us? yes/no").toLowerCase());
    console.log(userName + "  " + totalCartVal + "  " + memberStatus);

    // falshsale eligiblity check

    if (totalCartVal >= 100 && memberStatus === "yes") {
        console.log(userName, "Congrats, you're eligibel for the flash sale");
    } else {
        console.log(userName, " you are not eligible for the flash sale");
    }

}

