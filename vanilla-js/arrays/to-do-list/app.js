
const todos = [];

let input = prompt("What would you like to do?");
console.log("**********");
while(input !== "q" && input !== "Q"){
  if(input === "l" || input === "L") {
    listTodos()
  } else if (input === "n" || input ==="N") {
    addTodo()
  } else if(input === "d" || input === "D") {
    deleteTodo()
  } else {
    const help = alert('Available commands are:\
    N for new\
    L for list\
    D for delete\
    Q for quit')
  }
  input = prompt("What would you like to do?")
}
console.log("Until next time! Remember, I won't remember you")


function listTodos(){
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo(){
  // ask for new todo
  const newTodo = prompt("Enter new todo");
  // add to todos array
  todos.push(newTodo);
  console.log("Added \"" + newTodo + "\" " + "to the list");
}

function deleteTodo(){
  // ask for index
  let index = prompt("Enter index of todo to delete");
  // delete the todo
  todos.splice(index, 1);
  console.log("Deleted #" + index + " from the list");
}