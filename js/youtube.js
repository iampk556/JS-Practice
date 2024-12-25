

function videoLiked(userName, email) {
    // to find who liked the video, we must all the variables involved in that video
    const user = ` ${userName}, ${email}`;
    return user;


}


const who = videoLiked("pk", "pk@gmail.com");

console.log("Video liked by", who);



// function total(min, max) {
//     var total = max * min;
//     return total;
// }

// let result = total(4, 5);
// console.log(" the value is: ", result);
// console.log(" the value is ", total(3, 4));