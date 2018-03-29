
const name = "Jacob";
const age = 40;
const job = "Architect"
const city = "Sydney"
let html;

// without template strings (ES5)

html = "<h1>Template Literals" + "</h1>" +
       "<ul>" +
        "<li>Name: " + name + "</li>" +
        "<li>Age: " + age + "</li>" +
        "<li>Job: " + job + "</li>" +
        "<li>City: " + city + "</li>" +
       "</ul>";

// with template strings (ES6)

html = `
  <h1>Template Literals</h1>
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>
`;


document.body.innerHTML = html;