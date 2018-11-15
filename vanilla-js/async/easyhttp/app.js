const http = new easyHTTP();

// // Get posts
// const posts = http.get("https://jsonplaceholder.typicode.com/posts", function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// // Get Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: "Send the Star Troopers",
  body: "I'm stuck in an alternate universe"
};

// // Create Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/12", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
const posts = http.delete(
  "https://jsonplaceholder.typicode.com/posts/12",
  function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
