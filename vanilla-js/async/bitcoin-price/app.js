document.getElementById("btn").addEventListener("click", price);

const currency = "EUR"; // EUR, USD or GBP

function price() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.text())
    .then(data => {
      const current = JSON.parse(data);

      // console.log(current.bpi.EUR.rate);
      document.getElementById("output").innerHTML =
        current.bpi[currency].rate + " " + current.bpi[currency].symbol;
    })
    .catch(err => console.log(err));
}
