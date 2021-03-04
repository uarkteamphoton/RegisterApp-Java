// From Commit v2 - 2nd week progress

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

document.getElementById("button0").addEventListener("click", Start_transaction);

function Start_transaction() {
  alert ("Functionality has not yet been implemented!");
}

document.getElementById("button1").addEventListener("click", View_products);

function View_products() {
  return document.getElementById ("viewProductsButton");
}

document.getElementById("button2").addEventListener("click", Create_employee);

function Create_employee() {
  return document.getElementById("createEmployeeButton");
}

document.getElementById("button3").addEventListener("click", Sales_report);

function Sales_report() {
  alert ("Functionality has not yet been implemented!");
}

document.getElementById("button4").addEventListener("click", Cashier_report);

function Cashier_report() {
  alert ("Functionality has not yet been implemented!");
}
