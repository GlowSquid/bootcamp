// async function myFunc() {
//   // return "Hola";

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hola!"), 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Whoops"));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // Await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceed once promise is resolved
  const data = await response.json();
  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
