// let originalPost = { id: 101, content: "Going for a run!", timestamp: "8:00 AM" };

// // User edits the post
// let updatedPost = "Just finished my run!";
// originalPost = updatedPost;

// console.log(originalPost);   // Original post remains unchanged
// //console.log(updatedPost);    // Updated post with new content



let originalPost = { id: 101, content: "Going for a run!", timestamp: "8:00 AM" };

// User edits the post
let updatedPostFirstime = { ...originalPost, content: "Going for a run with my Dog!!" };
let updatedPostSecondime = { ...updatedPostFirstime, content: "Going for a run with my Dog near the Beach!" };

console.log(originalPost);   // Original post remains unchanged
console.log(updatedPostFirstime);    // Updated post with new content



console.log(originalPost.content);
console.log(updatedPostFirstime.content);
console.log(updatedPostSecondime.content);  