
// Annoy-O-Matic

var answer = prompt("Are we there yet?");


while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1 && answer.indexOf("yup") === -1) {
  var options = [
    "Are we there yet?",
    "Are we there now?",
    "How about now?",
    "Are you sure?"
  ]

  var answerToUse = options[Math.floor(Math.random() * options.length)];
  var answer = prompt(answerToUse);
}
alert("YAY, We made it!")
