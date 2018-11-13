const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" }
];

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Four", body: "This is post four" }, getPosts);

getPosts();

const boilWater = callback => {
  setTimeout(_ => {
    callback("Water is boiling!");
  }, 5000);
};

const insertNoodles = callback => {
  setTimeout(_ => {
    callback("Add noodles");
  }, 1000);
};

const addSeasoning = callback => {
  setTimeout(_ => {
    callback("Add seasoning");
  }, 1000);
};

const cooked = callback => {
  setTimeout(_ => {
    callback("Boiled and ready to eat!");
  }, 3000);
};

const eat = callback => {
  setTimeout(_ => {
    callback("That was good! I'm full.");
  }, 5000);
};

function makeNoodles() {
  console.log("MAKING NOODLES");
  boilWater(elem => {
    console.log(elem);
    insertNoodles(elem => {
      console.log(elem);
      addSeasoning(elem => {
        console.log(elem);
        cooked(elem => {
          console.log(elem);
          eat(elem => {
            console.log(elem);
          });
        });
      });
    });
  });
}

makeNoodles();
