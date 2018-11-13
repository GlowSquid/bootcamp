document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

// Load Single Customer

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const user = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Company: ${user.company}</li>
          <li>Phone: ${user.phone}</li>
        </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    } else {
      console.log("nope");
    }
  };

  xhr.send();
}

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const users = JSON.parse(this.responseText);

      let output = "";

      users.forEach(function(user) {
        output += `
        <ul>
          <li>ID ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Company: ${user.company}</li>
          <li>Phone: ${user.phone}</li>
        </ul>
      `;
      });

      document.getElementById("customers").innerHTML = output;
    } else {
      console.log("nope");
    }
  };

  xhr.send();
}
