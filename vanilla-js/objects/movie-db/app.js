
const movies = [
  {
    title: "Lucy",
    hasWatched: true,
    rating: 4.8
  },
  {
    title: "Man on a Ledge",
    hasWatched: true,
    rating: 4.2
  },
  {
    title: "The Hobbit",
    hasWatched: false,
    rating: 4.5
  }
]

function buildString(movie){
  let result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else{
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});

